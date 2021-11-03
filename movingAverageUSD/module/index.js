
const createTotalArr = require("./createTotalArr");

const requestGet = require('./requestGet')

const getRates = (id, startDate, endDate, date, course) =>
  

    requestGet(id, startDate, endDate)
    .then((res) =>
      res.map((el) => {
        delete el.Cur_ID;
        return el;
      })
    )
    .then((data) => {
      const result = createTotalArr(data, date, course);

      return result;

    });

module.exports = getRates;
