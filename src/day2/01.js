const { splitLines } = require('../common');

const parsePolicy = (str) => {
  const [min, max] = str.split('-');
  return {
    min: parseInt(min, 10),
    max: parseInt(max, 10),
  };
};

const parseLine = (line) => {
  const [policy, character, password] = line.split(' ');
  return {
    policy: {
      ...parsePolicy(policy),
      character: character.slice(0, 1),
    },
    password,
  };
};

const countChar = (str, char) => {
  let result = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) {
      result++;
    }
  }

  return result;
};

const isValid = (password, policy) => {
  const { min, max, character } = policy;
  const charCount = countChar(password, character);

  if (charCount >= min && charCount <= max) {
    return true;
  }

  return false;
};

const run = (input) => {
  const values = splitLines(input).map(parseLine);

  return values.filter(({ policy, password }) => isValid(password, policy)).length;
};

module.exports = run;
