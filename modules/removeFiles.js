const fs = require("fs/promises");
const path = require("path");

async function removeFiles(iPath, data) {
  return Promise.all(
    data.map((fileName) => {
      fs.unlink(path.join(iPath, fileName)).then(() => {
        console.log(`Removed: ${path.join(iPath, fileName)}`);
        return `${path.join(iPath, fileName)}`;
      });
    })
  ).then((res) => console.log(`Files deleted ${res}`));
}

module.exports = removeFiles;
