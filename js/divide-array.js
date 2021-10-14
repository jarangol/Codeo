const readline = require('readline');

const rd = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


rd.question('', n => {
  rd.question('', numbersInput => {
    const numbers = numbersInput.split(' ').map(n => Number(n));
    let finish = false;
    let firstRightElementIndex = 0;
    let totalSum = 0, leftSum = 0;

    for (let i = 0; i < numbers.length; i++) {
      totalSum += numbers[i];
    }

    while (firstRightElementIndex < numbers.length && !finish) {
      const number = numbers[firstRightElementIndex];
      leftSum += number;
      totalSum -= number;
      finish = (leftSum > 0) && (totalSum < 0);
      firstRightElementIndex++;
    }

    if (finish) {
      console.log(firstRightElementIndex);
    } else {
      console.log('Impossible');
    }
    process.exit();
  });
});