process.stdin.on('data', data => {
  const numbersString = data.toString();
  const numbers = numbersString.split(' ');
  console.log(Number(numbers[0]) + Number(numbers[1]));
  process.exit();
});