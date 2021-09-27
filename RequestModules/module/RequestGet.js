const https = require("https");
const http = require("http");

function requestGet(url) {
  let reqData = "";
  return new Promise((res, rej) => {
    if (url.protocol === "https:") {
      https.get(url, (httpsReq) => {
        httpsReq.on("data", (data) => {
          reqData += data.toString();
        });
        httpsReq.on("err", rej);
        httpsReq.on("end", () => res(reqData));
      });
    } else {
      http.get(url, (httpRes) => {
        httpRes.on("data", (data) => {
          reqData += data.toString();
        });
        httpRes.on("err", rej);
        httpRes.on("end", () => res(reqData));
      });
    }
  })
    .then(JSON.parse)
    .then((data) => {
      return data;
    });
}

module.exports = requestGet;
