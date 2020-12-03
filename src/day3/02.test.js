const test = require('ava');
const run = require('./02');

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
  const expected = 336;

  t.is(result, expected);
});
