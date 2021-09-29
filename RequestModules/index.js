// const requestGet = require("./module/RequestGet");
// const MyURL = new URL("https://www.nbrb.by/api/exrates/rates?periodicity=0");

// requestGet(MyURL).then((result) => {
//   console.log(result);
//   console.log("Request GET is done!");
// });

// do POST
const requestPost = require("./module/RequestPost");

const myURL = new URL("https://gorest.co.in/public/v1/users");

const postData = JSON.stringify({
  email: "kak@gmail.com",
  name: "Kate",
  gender: "female",
  status: "active",
});

requestPost(postData, myURL);
