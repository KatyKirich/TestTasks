const getRates = require("./module/index");

const startDate = new Date(2020, 11, 1).toUTCString();
const today = new Date().toUTCString();
const date = "Date";
const curOffRate = "Cur_OfficialRate";

getRates(usdIdAfter0708, startDate, today, date, curOffRate).then(() =>
  console.log("Job is done!")
);
