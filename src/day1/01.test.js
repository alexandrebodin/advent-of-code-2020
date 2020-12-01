const test = require('ava');
const run = require('./01');

test('Example input', (t) => {
  const input = `
    1721
    979
    366
    299
    675
    1456
  `;

  const result = run(input)
  const expected = 514579;

  t.is(result, expected);
});

test('Basic case', (t) => {
  const input = `
    1
    2019
  `;

  const result = run(input)
  const expected = 2019;

  t.is(result, expected);
});
