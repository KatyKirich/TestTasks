const calculateMovingAverage = require("./calculateMovingAverage");

function createTotalArr(data) {
  data.reduce((total, current, index, array) => {
    if (index <= 30) {
      return total;
    }
    total.push({
      date: current.Date,
      course: current.Cur_OfficialRate,
      movingAverageCourse: calculateMovingAverage(
        array.slice(index - 30, index)
      ),
    });
    return total;
  }, []);
}

module.exports = createTotalArr;
