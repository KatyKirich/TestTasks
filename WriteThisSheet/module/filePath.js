function filePath(arr) {
  return `${arr[0].Cur_ID}_${arr[0].Date}-${arr[arr.length - 1].Date}.txt`;
}
module.exports = filePath;
