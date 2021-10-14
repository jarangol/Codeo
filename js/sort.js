const readline = require('readline');

const rd = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

rd.question('', n => {
  rd.question('', numbersInput => {
    const numbers = numbersInput.split(' ').map(n => Number(n));
    let index = 0;
    let ordered = false;
    while (index < n && !ordered) {
      index++;
      ordered = true;
      for (let j = 0; j < n - index; j++) {
        if (numbers[j] > numbers[j+1]) {
          ordered = false;
          const aux = numbers[j];
          numbers[j] = numbers[j+1];
          numbers[j+1] = aux;
        }
      }
    }

    console.log(numbers.join(' '));
    process.exit();
  });
})