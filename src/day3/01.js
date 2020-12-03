const { splitLines } = require('../common');

const TREE = '#';

const RIGHT_MOVE = 3;
const DOWN_MOVE = 1;

const isTree = (char) => char === TREE;

const run = (input) => {
  const treeMap = splitLines(input).map((line) => line.split(''));

  const height = treeMap.length;
  const width = treeMap[0].length;

  let treeCount = 0;
  let currentPos = { col: 0, row: 0 };

  while (currentPos.row < height) {
    if (isTree(treeMap[currentPos.row][currentPos.col])) {
      treeCount += 1;
    }

    currentPos.row += DOWN_MOVE;
    currentPos.col = (currentPos.col + RIGHT_MOVE) % width;
  }

  return treeCount;
};

module.exports = run;
