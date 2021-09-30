function filePath(arr) {
  const startDate = new Date(Date.parse(arr[0].Date));
  console.log(startDate);
  const endDate = new Date(Date.parse(arr[arr.length - 1].Date));
  return `${arr[0].Cur_ID}_${startDate.getFullYear()}-${
    startDate.getMonth() + 1
  }-${startDate.getDay()}-${endDate.getFullYear()}-${
    endDate.getMonth() + 1
  }-${endDate.getDay()}.txt`;
}
module.exports = filePath;
