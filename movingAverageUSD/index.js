const https = require("https");

const usdIdAfter0708 = 431;
const startDate = new Date(2020, 11, 1).toUTCString();
const today = new Date().toUTCString();

function getURL(currencyId, startDate, endDate) {
  return `https://www.nbrb.by/API/ExRates/Rates/Dynamics/${currencyId}?startDate=${startDate}&endDate=${endDate}`;
}

const getRates = (id) =>
  new Promise((res, rej) => {
    let dataRates = "";

    https
      .get(getURL(id, startDate, today), (httpsResponse) => {
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
    );

getRates(usdIdAfter0708).then(console.log);

// const rates = [...(await getRates(usdId)), ...(await getRates(usdIdAfter0708))];
// console.log(rates);
