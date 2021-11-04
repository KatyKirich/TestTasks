const calculateAverage = require("./calculateAverage");

function createTotalArr(data, date, course) {
  return data
    .map((current, index, array) => {
      if (index <= 30) return;
      return {
        date: current[date],
        course: current[course],
        movingAverageCourse: calculateAverage(
          array.slice(index - 30, index),
          course
        ),
      };
    })
    .filter(Boolean);
}

module.exports = createTotalArr;
