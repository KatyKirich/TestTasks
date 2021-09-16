const fs = require("fs/promises");
const path = require("path");

async function removeFiles(iPath, data) {
  return await data.map((files) => {
    fs.unlink(path.join(iPath, files), (err) => {
      if (err) {
        console.log(err);
      }
    });
  });
}

module.exports = removeFiles;
