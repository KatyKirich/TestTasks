const fs = require("fs");
const path = require("path");
const zlib = require("zlib");

const inpPath = "./input";
const outPath = "./output";

const folderPromise = new Promise((res, rej) => {
  fs.readdir(inpPath, (err, folder) => {
    if (err) {
      console.log(err);
    } else {
      const fileNames = folder;
      res(fileNames);
      console.log(fileNames);
    }
  });
});

folderPromise.then((data) => {
  const promises = [];

  data.forEach((i) => {
    promises.push(
      new Promise((res, rej) => {
        const readStream = fs.createReadStream(path.join(inpPath, i));
        console.log("Create read stream");

        const writeStream = fs.createWriteStream(path.join(outPath, i));
        console.log("Create write stream");

        const compressStream = zlib.createGzip();
        console.log("Create zip");

        readStream
          .on("data", () => {
            console.log("Have data");
          })
          .pipe(compressStream)
          .pipe(writeStream)
          .on("end", () => res);
      })
    );
  });
  return Promise.all([promises]).then(() => {
    console.log("Copy all files done");
  });
});
