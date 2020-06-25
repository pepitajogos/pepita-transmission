// https://firebase.google.com/docs/functions/typescript

import * as functions from "firebase-functions";
import admin from "firebase-admin";
import { DocumentSnapshot } from "firebase-functions/lib/providers/firestore";

admin.initializeApp();

const db = admin.firestore();
const { FieldValue } = admin.firestore;

async function processAvgsByEnding() {
  const query = await db.collection("endings").get();
  const docs = query.docs;
  const sum = docs.reduce((acc, doc) => acc + (doc.get("hits") || 0), 0);
  const avgs: { [k: string]: number } = {};
  for (const doc of docs) {
    avgs[doc.id] = sum > 0 ? (doc.get("hits") || 0) / sum : 0;
  }

  return db
    .collection("stats")
    .doc("avg_by_ending")
    .set(avgs);
}

// async function processCountByCountry() {
//   const query = await db.collection("countries").get();
//   const docs = query.docs;
//   const counts: { [k: string]: number } = {};
//   for (const doc of docs) {
//     counts[doc.id] = doc.get("hits") || 0;
//   }

//   return db.collection("stats").doc("count_by_country").set(counts);
// }

// async function updateStats(
//   snapshot: DocumentSnapshot,
//   context: functions.EventContext
// ) {
//   const { country, ending } = snapshot.data()!;

//   // increment hits
//   const endingDoc = db.collection("endings").doc(ending);
//   const countryDoc = db.collection("countries").doc(`${country}`.toUpperCase());
//   await Promise.all([
//     endingDoc.set({ hits: FieldValue.increment(1) }, { merge: true }),
//     countryDoc.set({ hits: FieldValue.increment(1) }, { merge: true }),
//   ]);

//   // update avg by endings
//   return Promise.all([processAvgsByEnding(), processCountByCountry()]);
// }

async function updateStats(
  snapshot: DocumentSnapshot,
  context: functions.EventContext
) {
  const { ending } = snapshot.data()!;

  // increment hits
  const endingDoc = db.collection("endings").doc(ending);
  await Promise.all([
    endingDoc.set({ hits: FieldValue.increment(1) }, { merge: true }),
  ]);

  // update avg by endings
  return Promise.all([processAvgsByEnding()]);
}

export default functions.firestore
  .document("results/{result}")
  .onCreate(updateStats);
