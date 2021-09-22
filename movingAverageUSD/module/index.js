const https = require("https");
const createTotalArr = require("./createTotalArr");
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
    .then((res) =>
      res.map((el) => {
        delete el.Cur_ID;
        return el;
      })
    )
    .then((data) => {
      const result = createTotalArr(data, date, course);
      console.log(result);
    });

module.exports = getRates;
