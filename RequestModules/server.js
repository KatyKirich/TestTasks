const http = require("http");

http
  .createServer((req, res) => {
    console.log("server work");
    res.end("OK");

    let body = "";
    req.on("data", (chunk) => {
      body += chunk.toString();
    });
    req.on("end", () => {
      console.log(body);
      let params = parse(body);
      console.log(params);
      res.end("ok");
    });
  })
  .listen(3000);
