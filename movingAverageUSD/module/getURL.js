function getURL(currencyId, startDate, endDate) {
  return `https://www.nbrb.by/API/ExRates/Rates/Dynamics/${currencyId}?startDate=${startDate}&endDate=${endDate}`;
}

module.exports = getURL;
