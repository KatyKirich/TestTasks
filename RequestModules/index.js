const requestGet = require("./module/RequestGet");
const MyURL = new URL("https://www.nbrb.by/api/exrates/rates?periodicity=0");

requestGet(MyURL).then((result) => {
  console.log(result);
  console.log("Request GET is done!");
});
