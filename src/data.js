/**
 * @typedef {Object} Story  Objeto representando um envio de história.
 * @property {string} Story.name  O nome do usuário
 * @property {string} Story.email  O email do usuário
 * @property {string} Story.story  A história que o usuário quer contar
 */

/**
 * @typedef {Object} Result  Objeto representando um resultado do jogo.
 * @param {string} Result.ending  O código do final.
 * @param {string} Result.country  O código do país em duas letras maiúsculas (ex: BR, US, ES)
 */

/**
 * Envia uma história à base de dados.
 *
 * @param {Story} story
 */

export async function addStory(story) {
    const auth = firebase.auth();
    if (!auth) throw "Usuário não logado.";
    const user = auth.currentUser;
    if (!user) throw "Usuário não logado.";

    const db = firebase.firestore();

    return db
        .collection("stories")
        .doc(user.uid)
        .set({
            ...story,
            created_at: firebase.firestore.FieldValue.serverTimestamp(),
        });
}

/**
 * Envia o resultado de um jogo à base de dados.
 *
 * @param {Result} result
 */
export async function addResult(result) {
    const auth = firebase.auth();
    if (!auth) throw "Usuário não logado.";
    const user = auth.currentUser;
    if (!user) throw "Usuário não logado.";

    const db = firebase.firestore();

    return db
        .collection("results")
        .doc(user.uid)
        .set({
            ...result,
            created_at: firebase.firestore.FieldValue.serverTimestamp(),
        });
}

/**
 * Desloga o usuário e loga de novo para renovar o token.
 */
export async function signIn() {
    await firebase.auth().signOut();
    await firebase
        .auth()
        .signInAnonymously()
        .then((auth) => { auth.user; });
    addCountByCountry();
}

async function addCountByCountry() {
    var key = await getCountry();;
    var data = {};
    data[key] = firebase.firestore.FieldValue.increment(1);

    const db = firebase.firestore();

    var countryRef = db.collection('stats').doc('count_by_country');
    countryRef.update(data);
}

/**
 * Recupera a contagem de resultados por país.
 */
export async function getCountByCountry() {

    const db = firebase.firestore();

    const doc = await db
        .collection("stats")
        .doc("count_by_country")
        .get();

    return doc.data();
}

/**
 * Recupera a porcentagem de resultados por final.
 */
export async function getRatioByEnding() {

    const db = firebase.firestore();

    const doc = await db
        .collection("stats")
        .doc("avg_by_ending")
        .get();

    return doc.data();
}

export async function getCountry() {
    const doc = await fetch('https://pro.ip-api.com/json/?key=4XU9wivJgRoNMv2').then(r => r.json());

    return doc.countryCode;
}