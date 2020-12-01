const { splitLines } = require('../common');

const run = (input) => {
  const values = splitLines(input).map((line) => parseInt(line, 10));

  for (let i = 0; i < values.length; i++) {
    for (let j = i + 1; j < values.length; j++) {
      if (values[i] + values[j] === 2020) {
        return values[i] * values[j];
      }
    }
  }
};

module.exports = run;
