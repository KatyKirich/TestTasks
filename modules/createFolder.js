const fs = require("fs");

async function createFolder(path) {
  return await fs.mkdir(path, (err) => {
    if (err) throw err;
  });
}

module.exports = createFolder;
