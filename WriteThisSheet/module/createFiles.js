const fs = require("fs");

function createFiles(arr, start, end) {
  arr.map((el) => {
    fs.mkdir(`./${el.Cur_ID}_${start}-${end}`, (err) => {
      if (err) throw err;
    });
  });
}
module.exports = createFiles;
