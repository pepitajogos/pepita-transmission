const fs = require("fs");
const path = require("path");
const fetch = require("node-fetch");
const FormData = require("form-data");

const API_KEY = "30ea466d28a6d399b1e45c8bf5bcb0d6";
const PROJECT_ID = "340981";
const TARGET_DIR = path.join(__dirname, "../src/locales");

async function main() {
  const langs = await post(`https://api.poeditor.com/v2/languages/list`).then(
    (json) => json.result.languages
  );

  console.log(`${langs.length} idiomas encontrados`);

  for (const lang of langs) {
    const filename = path.join(TARGET_DIR, `${lang.code.toLowerCase()}.json`);

    console.log(`Fazendo download do idioma “${lang.name}”`);

    const termsFileURL = await post(
      `https://api.poeditor.com/v2/projects/export`,
      {
        language: lang.code,
        type: "key_value_json",
      }
    ).then((json) => json.result.url);

    const targetFile = fs.createWriteStream(filename);
    const file = await fetch(termsFileURL);
    file.body.pipe(targetFile);

    console.log(`Arquivo salvo: ${filename}`);
    console.log("");
  }
}

main();

function post(url, data = {}) {
  const fd = new FormData();
  fd.append("api_token", API_KEY);
  fd.append("id", PROJECT_ID);

  for (const [k, v] of Object.entries(data)) {
    fd.append(k, v);
  }

  return fetch(url, {
    method: "POST",
    body: fd,
  }).then((r) => r.json());
}
