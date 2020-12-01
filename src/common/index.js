const splitLines = (buffer) =>
  buffer
    .toString()
    .trim()
    .split('\n')
    .map((line) => line.trim());

module.exports = {
  splitLines,
};
