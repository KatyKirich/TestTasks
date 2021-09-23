const calculateAverage = (array, course) => {
  const count = array.length;
  const sum = array.reduce((total, current) => total + current[course], 0);

  return sum / count;
};

module.exports = calculateAverage;
