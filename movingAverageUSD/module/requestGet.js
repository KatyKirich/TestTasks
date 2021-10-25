const getURL = require("./getURL");
const https = require('https')

function requestGet(id, startDate, endDate){
    let dataRates = "";

    return new Promise((res, rej) => {
      https.get(getURL(id, startDate, endDate), (httpsRes) => {
        httpsRes.on("data", (data) => {
          dataRates += data.toString();
        });
        httpsRes.on("err", rej);
        httpsRes.on("end", () => res(dataRates));
      });
    })
      .then(JSON.parse)
      .then((data) => {
        return data;
      });

    
}

module.exports = requestGet