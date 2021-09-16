const fs = require("fs");
const pipeStream = require("./pipeStream");
const removeFiles = require("./removeFiles");
const folderCheck = require("./folderCheck");

async function movingFiles(from, to) {
  if (fs.existsSync(from)) {
    const files = fs.readdirSync(from);
    console.log(files);

    if (files.length > 1) {
      // Check Folder
      await folderCheck(to);

      // 2. PROMISIFY
      const promises = await pipeStream(from, to, files);
      console.log(promises);
      // 3. PROMISE.ALL
      await Promise.all(promises).then(console.log("Promises done"));
      //4. REMOVE FILES
      await removeFiles(from, files).then(console.log("Files deleted"));

      console.log("Files transfer done");
    } else {
      console.log("No files");
    }
  } else {
    console.log("No Folder");
  }
}

module.exports = movingFiles;
