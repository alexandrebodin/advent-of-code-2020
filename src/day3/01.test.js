const test = require('ava');
const run = require('./01');

test('Example input', (t) => {
  const input = `
  ..##.......
  #...#...#..
  .#....#..#.
  ..#.#...#.#
  .#...##..#.
  ..#.##.....
  .#.#.#....#
  .#........#
  #.##...#...
  #...##....#
  .#..#...#.#
  `;

  const result = run(input);
  const expected = 7;

  t.is(result, expected);
});
