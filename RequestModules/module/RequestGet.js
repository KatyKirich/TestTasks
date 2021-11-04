const checkProtocol = require("./checkProtocol");

function requestGet(url) {
  let reqData = "";
  const protocol = checkProtocol(url);
  return new Promise((res, rej) => {
    protocol.get(url, (protReq) => {
      protReq.on("data", (data) => {
        reqData += data.toString();
      });
      protReq.on("err", rej);
      protReq.on("end", () => res(reqData));
    });
  })
    .then(JSON.parse)
    .then((data) => {
      return data;
    });
}

module.exports = requestGet;
