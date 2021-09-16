const fs = require("fs");

function folderCheck(path) {
  if (fs.existsSync(path)) {
    console.log("You have output folder");
  } else {
    fs.mkdir(path, (err) => {
      if (err) throw err;
    });
    console.log("Folder created");
  }
}

module.exports = folderCheck;
