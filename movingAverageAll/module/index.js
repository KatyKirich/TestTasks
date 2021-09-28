const createTotalArr = require("./createTotalArr");
const getURL = require("./getURL");
const requestGet = require("./RequestGet");

const getRates = async (urlArr, startDate, endDate, date, course) => {
  const arrIds = (await requestGet(urlArr)).map((el) => {
    return el.Cur_ID;
  });

  const promises = arrIds.map((id) =>
    requestGet(getURL(id, startDate, endDate)).then((res) =>
      res.map((el) => {
        delete el.Cur_ID;
        return el;
      })
    )
  );
  console.log(promises);
  return Promise.all(promises).then((data) => {
    // console.log(data);
    const result = createTotalArr(data, date, course);
    console.log(result);
    return result;
  });
};

module.exports = getRates;
