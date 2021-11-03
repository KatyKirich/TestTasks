const createTotalArr = require("./createTotalArr");
const getArrIds = require('./getArrIds')
const requestGet = require("./RequestGet");

const getRates = async (urlArr, startDate, endDate, date, course) => {
  const arrIds = (await requestGet(urlArr)).map((el) => {
    return el.Cur_ID;
  });

  return Promise.all(getArrIds(arrIds,startDate,endDate)).then((data) => {
    // console.log(data);
    return createTotalArr(data, date, course);
    
  });
};

module.exports = getRates;
