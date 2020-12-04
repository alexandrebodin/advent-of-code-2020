const { splitLines } = require('../common');

const fields = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid'];

const isValid = (passport) => {
  for (let field of fields) {
    if (!Object.prototype.hasOwnProperty.call(passport, field)) {
      return false;
    }
  }
  return true;
};

const parseProps = (line) => {
  return line.split(/\s/).reduce((acc, prop) => {
    const [key, value] = prop.split(':');
    return { ...acc, [key]: value };
  }, {});
};

const run = (input) => {
  const passports = splitLines(input).reduce(
    (acc, line) => {
      if (line === '') {
        acc.push({});
        return acc;
      }

      const passport = acc[acc.length === 0 ? 0 : acc.length - 1];
      Object.assign(passport, parseProps(line));

      return acc;
    },
    [{}]
  );

  return passports.filter(isValid).length;
};

module.exports = run;
