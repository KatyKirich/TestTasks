const fs = require("fs/promises");
const path = require("path");

function removeFiles(iPath, data) {
  return Promise.all(
    data.map(async (fileName) => {
      console.log("Fs unlink");
      await fs.unlink(path.join(iPath, fileName));
      // .then(() => {
      console.log(`Removed: ${path.join(iPath, fileName)}`);
      return `${path.join(iPath, fileName)}`;
      // });
    })
  ).then((res) => console.log(`Files deleted ${res}`));
}

module.exports = removeFiles;
