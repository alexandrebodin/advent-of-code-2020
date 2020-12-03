const { splitLines } = require('../common');

const TREE = '#';

const traversalPolicies = [
  {
    right: 1,
    down: 1,
  },
  {
    right: 3,
    down: 1,
  },
  {
    right: 5,
    down: 1,
  },
  {
    right: 7,
    down: 1,
  },
  {
    right: 1,
    down: 2,
  },
];

const isTree = (char) => char === TREE;

const run = (input) => {
  const treeMap = splitLines(input).map((line) => line.split(''));

  const height = treeMap.length;
  const width = treeMap[0].length;

  return traversalPolicies
    .map(({ right, down }) => {
      let treeCount = 0;
      let currentPos = { col: 0, row: 0 };

      while (currentPos.row < height) {
        if (isTree(treeMap[currentPos.row][currentPos.col])) {
          treeCount += 1;
        }

        currentPos.row += down;
        currentPos.col = (currentPos.col + right) % width;
      }

      return treeCount;
    })
    .reduce((acc, count) => acc * count, 1);
};

module.exports = run;
