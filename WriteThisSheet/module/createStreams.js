const fs = require("fs");
const { pipeline } = require("stream/promises");
const filePath = require("./filePath");

async function createStreams(data) {
  return await data.map(async (arr) => {
    fs.writeFile(filePath(arr), data.toString(), (err) => {
      if (err) throw err;
      console.log("The file has been saved!");
    });
  });
}

module.exports = createStreams;
