const { splitLines } = require('../common');

const run = (input) => {
  const values = splitLines(input).map((line) => parseInt(line, 10));

  for (let i = 0; i < values.length; i++) {
    for (let j = i + 1; j < values.length; j++) {
      for (let k = j + 1; k < values.length; k++) {
        if (values[i] + values[j] + values[k] === 2020) {
          return values[i] * values[j] * values[k];
        }
      }
    }
  }
};

module.exports = run;
