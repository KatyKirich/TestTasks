const getRates = require("./module/index");

const startDate = new Date(2021, 6, 1);
const today = new Date();
const url = "https://www.nbrb.by/api/exrates/rates?periodicity=0";

getRates(url, startDate, today).then(() => console.log("Job is done!"));

// var fs = require("fs");
// // Change the content of the file as you want
// // or either set fileContent to null to create an empty file
// var fileContent = "Hello World!";
// // The absolute path of the new file with its name
// var filepath = "mynewfile.txt";
// fs.writeFile(filepath, fileContent, (err) => {
//   if (err) throw err;
//   console.log("The file was succesfully saved!");
// });
