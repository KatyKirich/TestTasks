const getRates = require("./module/index");

const startDate = new Date(2021, 6, 1);
const today = new Date();
const url = "https://www.nbrb.by/api/exrates/rates?periodicity=0";

getRates(url, startDate, today).then(() => console.log("Job is done!"));
