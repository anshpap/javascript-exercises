const ftoc = function(tempF) {
  let tempC = (tempF - 32) * 5 / 9;
  return +tempC.toFixed(1);
};

const ctof = function(tempC) {
  let tempF = (tempC * 9 / 5) + 32;
  return +tempF.toFixed(1);
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
