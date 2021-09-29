const checkProtocol = require("./checkProtocol");

function requestGet(url) {
  let reqData = "";
  const protocol = checkProtocol(url);
  return new Promise((res, rej) => {
    protocol.get(url, (httpsReq) => {
      httpsReq.on("data", (data) => {
        reqData += data.toString();
      });
      httpsReq.on("err", rej);
      httpsReq.on("end", () => res(reqData));
    });
  })
    .then(JSON.parse)
    .then((data) => {
      return data;
    });
}

module.exports = requestGet;
