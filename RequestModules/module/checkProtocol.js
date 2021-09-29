const https = require("https");
const http = require("http");

function checkProtocol(url) {
  if (url.protocol === "https:") {
    return https;
  }
  if (url.protocol === "http:") {
    return http;
  } else {
    console.log("Dont have protocol");
  }
}

module.exports = checkProtocol;
