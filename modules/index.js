const readDir = require("./readdir");
const pipeStream = require("./pipeStream");
const removeFiles = require("./removeFiles");

async function movingFiles(from, to) {
  // 1. ДОСТАТЬ СПИСОК
  const files = await readDir(from);
  console.log(files);
  // 2. PROMISIFY
  const promises = await pipeStream(from, to, files);
  console.log(promises);
  // 3. PROMISE.ALL
  await Promise.all(promises).then(console.log("Promises done"));
  //4. REMOVE FILES
  await removeFiles(from, files).then(console.log("Files deleted"));

  console.log("Files transfer done");
}

module.exports = movingFiles;
