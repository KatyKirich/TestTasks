const fs = require("fs");
const path = require("path");
const zlib = require("zlib");

const inpPath = "./input";
const outPath = "./output";

fs.readdir(inpPath, (err, folder) => {
  if (err) {
    console.log(err);
  } else {
    folder.forEach((i) => {
      console.log("File Names:" + i);

      const readStream = fs.createReadStream(path.join(inpPath, i));
      console.log("Create readStream");

      const writeStream = fs.createWriteStream(path.join(outPath, i));
      console.log("Create writeStream");

      const compressStream = zlib.createGzip();
      console.log("Create compressStream");

      readStream.pipe(compressStream).pipe(writeStream);

      console.log("Copy done");
    });
  }
});
