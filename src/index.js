const fs = require('fs');
const path = require('path');

const days = 4;

const execExercise = (input, day, num) => {
  const exercisePath = `./day${day}/${num}.js`;

  try {
    require.resolve(exercisePath);
  } catch (err) {
    return;
  }

  const ex = require(exercisePath);
  console.log(`Exercise ${num}: ${ex(input)}`);
};

const execDay = (day) => {
  const input = fs.readFileSync(path.join(__dirname, `day${day}`, 'input.txt'));

  execExercise(input, day, '01');
  execExercise(input, day, '02');
};

for (let i = 1; i < days + 1; i++) {
  console.log(`------- Day ${i} -------`);
  execDay(i);
  console.log(`---------------------`);
}
