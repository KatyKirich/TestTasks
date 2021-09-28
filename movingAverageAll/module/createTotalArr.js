const calculateAverage = require("./calculateAverage");

function createTotalArr(data, date, course) {
  console.log(data);
  const result = data
    .flat()
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
  console.log("Create Total Arr", result);
  return result;
}

module.exports = createTotalArr;
