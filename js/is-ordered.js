
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let sorted = true;
rl.question('', (n) => {
  rl.question('', (numbersString) => {
    const numbers = numbersString.split(' ').map(number => Number(number));
    let index = 0;
    while(index < n - 1 && sorted) {
      sorted = numbers[index] <= numbers[index+1] 
      index++;
    }
    console.log(sorted ? 'Ordenado' : 'Desordenado');
    rl.close();
  });
});