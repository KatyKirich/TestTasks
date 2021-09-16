const fs = require("fs");
const path = require("path");
const zlib = require("zlib");
const { pipeline } = require("stream/promises");

async function pipeStream(iPath, oPath, data) {
  return await data.map(async (file) => {
    await pipeline(
      fs
        .createReadStream(path.join(iPath, file))
        .on("open", () => console.log("Create Read Stream")),
      zlib.createGzip(),
      fs
        .createWriteStream(path.join(oPath, file + ".gz"))
        .on("open", () => console.log("Create Write Stream"))
    );
  });
}

module.exports = pipeStream;
