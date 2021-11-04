const createTotalArr = require("./createTotalArr");
const getURL = require("./getURL");
const requestGet = require("./RequestGet");

const getRates = async (urlArr, startDate, endDate, date, course) => {
  const arrIds = (await requestGet(urlArr)).map((el) => {
    return el.Cur_ID;
  });

  console.log(arrIds);

  return arrIds.forEach((id) =>
    requestGet(getURL(id, startDate, endDate))
      .then((res) =>
        res.map((el) => {
          delete el.Cur_ID;
          return el;
        })
      )
      .then((data) => {
        const result = createTotalArr(data, date, course);
        console.log(result);
      })
  );
};

module.exports = getRates;
