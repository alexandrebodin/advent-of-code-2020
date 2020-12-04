const { splitLines } = require('../common');

const has = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop);
const requiredFields = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid'];

const ECL_ENUM = ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth'];

const validators = {
  byr: (value) => {
    if (value.length !== 4) {
      return false;
    }

    const vl = parseInt(value, 10);
    return vl >= 1920 && vl <= 2002;
  },
  iyr: (value) => {
    if (value.length !== 4) {
      return false;
    }

    const vl = parseInt(value, 10);
    return vl >= 2010 && vl <= 2020;
  },
  eyr: (value) => {
    if (value.length !== 4) {
      return false;
    }

    const vl = parseInt(value, 10);
    return vl >= 2020 && vl <= 2030;
  },
  hgt: (value) => {
    const [_, val, unit] = value.match(/(\d+)(\w+)/);

    const num = parseInt(val, 10);

    if (unit === 'cm') {
      return num >= 150 && num <= 193;
    } else if (unit === 'in') {
      return num >= 59 && num <= 76;
    } else {
      return false;
    }
  },
  hcl: (value) => /^#[0-9a-f]{6}$/.test(value),
  ecl: (value) => ECL_ENUM.includes(value),
  pid: (value) => /^[0-9]{9}$/.test(value),
};

const isValid = (passport) => {
  for (let field of requiredFields) {
    if (!has(passport, field)) {
      return false;
    } else if (!validators[field](passport[field])) {
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
