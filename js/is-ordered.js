
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let ordenado = true;
rl.question('', (n) => {
  rl.question('', (numbersString) => {
    const numbers = numbersString.split(' ').map(number => Number(number));
    if (numbers.length > 1) {
      for(let i = 0; i < numbers.length - 1; i++) {
        if (numbers[i] > numbers[i+1]) {
          ordenado = false;
          break;
        }
      }
    }
    console.log(ordenado ? 'Ordenado' : 'Desordenado');
    rl.close();
  });
});