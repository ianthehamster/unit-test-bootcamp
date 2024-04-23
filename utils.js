const add = (a, b) => {
  return a + b;
};

const loopOverNumberArray = function (x, target) {
  for (let i = 0; i < x.length; i++) {
    if (x[i] === target) {
      return x[i];
    }
  }

  return 'Target not found';
};

const multiply = (a, b) => {
  return a * b;
};

module.exports = {
  loopOverNumberArray,
  add,
  multiply,
};
