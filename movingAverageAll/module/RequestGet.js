const https = require("https");

async function requestGet(url) {
  let reqData = "";
  return new Promise((res, rej) => {
    https.get(url, (httpsRes) => {
      httpsRes.on("data", (data) => {
        reqData += data.toString();
      });
      httpsRes.on("err", rej);
      httpsRes.on("end", () => res(reqData));
    });
  })
    .then(JSON.parse)
    .then((data) => {
      console.log(data);
      return data;
    });
}

module.exports = requestGet;
