const path = require("path");
const { pipeline } = require("stream/promises");
const createFiles = require("./createFiles");

async function createStreams(data, start, end) {
  return await data.map(async (arr) => {
    createFiles(arr, start, end);
    // await pipeline(
    //   fs
    //     .createReadStream(path.join(iPath, file))
    //     .on("open", () => console.log(`Create Read Stream: ${file}`)),

    //   fs
    //     .createWriteStream(path.join(oPath, file))
    //     .on("open", () => console.log(`Create Write Stream: ${file}`))
    // );
  });
}

module.exports = createStreams;
