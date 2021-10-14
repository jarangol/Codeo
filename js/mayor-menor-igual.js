process.stdin.on('data', data => {
  const numbersString = data.toString();
  const numbers = numbersString.split(' ');
  const a = Number(numbers[0]);
  const b = Number(numbers[1]);
  let salida;
  if (a > b) {
    salida = '>';
  } else if (a < b) {
    salida = '<';
  } else {
    salida = '=';
  }
  console.log(salida);
  process.exit();
});