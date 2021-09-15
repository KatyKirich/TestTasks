const readDir = require("./readdir");
const pipeStream = require("./pipeStream");

async function movingFiles(from, to) {
  // 1. ДОСТАТЬ СПИСОК
  const files = await readDir(from);
  console.log(files);
  // 2. PROMISIFY
  const promises = await pipeStream(from, to, files);
  console.log(promises);
  // 3. PROMISE.ALL
  await Promise.all(promises).then(console.log("Promises done"));
  // 4. REMOVE FROM INPUT
  console.log("Copy done");
}

module.exports = movingFiles;
