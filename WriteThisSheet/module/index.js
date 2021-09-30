const getURL = require("./getURL");
const requestGet = require("./RequestGet");
const createStreams = require("./createStreams");

const getRates = async (urlArr, startDate, endDate) => {
  const arrIds = (await requestGet(urlArr)).map((el) => {
    return el.Cur_ID;
  });

  const promises = arrIds.map((id) =>
    requestGet(getURL(id, startDate.toUTCString(), endDate.toUTCString())).then(
      (res) => {
        return res;
      }
    )
  );

  console.log(promises);
  return Promise.all(promises).then((data) => {
    createStreams(data);
    console.log(data);
  });
};

module.exports = getRates;
