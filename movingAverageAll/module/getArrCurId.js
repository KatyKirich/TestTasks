const https = require("https");

const url = "https://www.nbrb.by/api/exrates/currencies";

function getArrCurID() {
  return data.map((id) => {
    return id.Cur_ID;
  });
}
module.exports = getArrCurID;
