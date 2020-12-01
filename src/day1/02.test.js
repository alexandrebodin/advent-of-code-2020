const test = require('ava');
const run = require('./02');

test('Example input', (t) => {
  const input = `
    1721
    979
    366
    299
    675
    1456
  `;

  const result = run(input);
  const expected = 241861950;

  t.is(result, expected);
});

test('Basic case', (t) => {
  const input = `
    1
    1
    2018
  `;

  const result = run(input);
  const expected = 2018;

  t.is(result, expected);
});
