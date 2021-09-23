const https = require("https");
const createTotalArr = require("./createTotalArr");
const getArrCurID = require("./getArrCurId");
const getURL = require("./getURL");

const getRates = (id, startDate, endDate, date, course) =>
  new Promise((res, rej) => {
    let dataRates = "";

    https
      .get(getURL(id, startDate, endDate), (httpsResponse) => {
        httpsResponse.on("data", (data) => {
          dataRates += data.toString();
        });

        httpsResponse.on("error", rej);

        httpsResponse.on("end", () => res(dataRates));
      })
      .on("error", rej);
  })
    .then(JSON.parse)
    .then((res) => {
      return res;
    })

    .then((data) => {
      const arrCurId = getArrCurID(data);
      const result = createTotalArr(arrCurId, date, course);
      console.log(result);
    });

module.exports = getRates;
