const fs = require("fs/promises");

async function readDir(path) {
  return await fs.readdir(path);
}

module.exports = readDir;
