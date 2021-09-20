const calculateMovingAverage = (array) => {
  const count = array.length;
  const sum = array.reduce(
    (total, current) => total + current.Cur_OfficialRate,
    0
  );
  return sum / count;
};

module.exports = calculateMovingAverage;
