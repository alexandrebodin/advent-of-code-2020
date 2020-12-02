const test = require('ava');
const run = require('./01');

test('Example input', (t) => {
  const input = `
    1-3 a: abcde
    1-3 b: cdefg
    2-9 c: ccccccccc
  `;

  const result = run(input);
  const expected = 2;

  t.is(result, expected);
});

test('Basic case', (t) => {
  const input = `
    1-1 a: aa
  `;

  const result = run(input);
  const expected = 0;

  t.is(result, expected);
});
