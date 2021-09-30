const fs = require("fs");
const { pipeline } = require("stream/promises");
const filePath = require("./filePath");

async function createStreams(data) {
  return await data.map(async (arr) => {
    fs.writeFile(filePath(arr), data.toString(), (err) => {
      if (err) throw err;
      console.log("The file has been saved!");
    });

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
