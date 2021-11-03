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


    return new Promise((res,rej)=>{

      const req = protocol.request(options, (resp) => {

        console.log(`STATUS: ${resp.statusCode}`);
        console.log(`HEADERS: ${JSON.stringify(resp.headers)}`);

        resp.setEncoding("utf8");
        let data =''

        resp.on("data", (chunk) => {
          data+=chunk;
          console.log(`BODY: ${chunk}`);
        });

        resp.on("end", () => res(data))
        
      }).on("error", (e) => {
        console.error(`problem with request: ${e.message}`);
        return rej(e)
      });
    
      // Write data to request body
      req.write(myData);
      req.end();
    })
}



module.exports = requestPost;
