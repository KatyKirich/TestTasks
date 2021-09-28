const requestGet = require("./module/RequestGet");
const MyURL = new URL("https://www.nbrb.by/api/exrates/rates?periodicity=0");

const requestPost = require("./module/RequestPost");

requestGet(MyURL).then((result) => {
  console.log(result);
  console.log("Request GET is done!");
});

// do POST
const options = {
  hostname: "www.google.com",
  port: 80,
  path: "/upload",
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Content-Length": Buffer.byteLength(postData),
  },
};

const postData = JSON.stringify({
  msg: "Hello World!",
});

requestPost(options, postData);
