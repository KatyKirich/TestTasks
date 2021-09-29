const requestGet = require("./module/RequestGet");
const MyURL = new URL("https://www.nbrb.by/api/exrates/rates?periodicity=0");

requestGet(MyURL).then((result) => {
  console.log(result);
  console.log("Request GET is done!");
});

// do POST
const requestPost = require("./module/RequestPost");

const { urlToHttpOptions } = require("url");

const myURL = new URL("https://gorest.co.in/public/v1/users");

const postData = JSON.stringify({
  email: "kak@gmail.com",
  name: "Kate",
  gender: "female",
  status: "active",
});
const options = urlToHttpOptions(myURL);
console.log(options);

options.method = "POST";
options.headers = {
  "Content-Type": "application/json",
  "Content-Length": Buffer.byteLength(postData),
  Authorization:
    "Bearer bad9f059a82ad35987e5030bc46d970960860a47e9be0597f554a987cf840cc5",
};

requestPost(options, postData, myURL);
