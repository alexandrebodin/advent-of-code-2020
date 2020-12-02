const { splitLines } = require('../common');

const parsePolicy = (str) => {
  const [firstPos, secondPos] = str.split('-');
  return {
    firstPos: parseInt(firstPos, 10) - 1,
    secondPos: parseInt(secondPos, 10) - 1,
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

const isValid = (password, policy) => {
  const { firstPos, secondPos, character } = policy;

  if (password.charAt(firstPos) === character && password.charAt(secondPos) !== character) {
    return true;
  }

  if (password.charAt(firstPos) !== character && password.charAt(secondPos) === character) {
    return true;
  }

  return false;
};

const run = (input) => {
  const values = splitLines(input).map(parseLine);

  return values.filter(({ policy, password }) => isValid(password, policy)).length;
};

module.exports = run;
