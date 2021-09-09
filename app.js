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
      

      const writeStream = fs.createWriteStream(path.join(outPath, i));
      

      const compressStream = zlib.createGzip();
     

      readStream.on('data', (chunk) => {
        
        console.log(`Received ${chunk.length} bytes of data.`);
        
      }).pipe(compressStream).pipe(writeStream)
      
      readStream.on('end', () => {

        console.log('There will be no more data.');
        console.log("Copy done");
      });

     
    });
  }
});
