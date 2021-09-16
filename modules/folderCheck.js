const fs = require("fs");
const createFolder = require("./createFolder");

function folderCheck(path) {
  if (fs.existsSync(path)) {
    console.log("You have output folder");
  } else {
    createFolder(path);
    console.log("Folder created");
  }
}

module.exports = folderCheck;
