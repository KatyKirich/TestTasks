const checkProtocol = require("./checkProtocol");
const { urlToHttpOptions } = require("url");

function requestPost(myData, url) {
  const protocol = checkProtocol(url);

  const options = urlToHttpOptions(url);
  console.log(options);

  options.method = "POST";
  options.headers = {
    "Content-Type": "application/json",
    "Content-Length": Buffer.byteLength(myData),
    Authorization:
      "Bearer bad9f059a82ad35987e5030bc46d970960860a47e9be0597f554a987cf840cc5",
  };

  const req = protocol.request(options, (res) => {
    console.log(`STATUS: ${res.statusCode}`);
    console.log(`HEADERS: ${JSON.stringify(res.headers)}`);
    res.setEncoding("utf8");
    res.on("data", (chunk) => {
      console.log(`BODY: ${chunk}`);
    });
    res.on("end", () => {
      console.log("No more data in response.");
    });
  });

  req.on("error", (e) => {
    console.error(`problem with request: ${e.message}`);
  });

  // Write data to request body
  req.write(myData);
  req.end();
}

module.exports = requestPost;
