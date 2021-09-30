const fs = require("fs");

function createFiles(arr) {
  arr.map((el) => {
    fs.mkdir(
      `./${el.Cur_ID}_${el[0].Date}-${el[el.length - 1].Date}`,
      (err) => {
        if (err) throw err;
      }
    );
  });
}
module.exports = createFiles;
