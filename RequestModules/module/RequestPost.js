const https = require("https");
const http = require("http");

var options = {
  hostname: "posttestserver.com",
  port: 443,
  path: "/post.php",
  method: "POST",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
    "Content-Length": postData.length,
  },
};

function requestPost(url, options) {
  let reqBody = "";
  return new Promise((res, rej) => {
    if (url.protocol === "http:") {
      http.request(options, (httpsReq) => {
        httpsReq.on("data", (data) => {
          reqData += data.toString();
        });
        httpsReq.on("err", rej);
        httpsReq.on("end", () => res.write(reqData));
      });
    } else {
      https.request(options, (httpRes) => {
        httpRes.on("data", (data) => {
          reqData += data.toString();
        });
        httpRes.on("err", rej);
        httpRes.on("end", () => res.write(reqData));
      });
    }
  });
}

module.exports = requestPost;
