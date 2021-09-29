const checkProtocol = require("./checkProtocol");

function requestPost(options, myData, url) {
  const protocol = checkProtocol(url);

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
