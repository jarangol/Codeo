process.stdin.on('data', (input) => {
  let inputArray = input.toString().split('').map(n => Number(n));
  inputArray.pop();
  let index = inputArray.length - 1;
  let current;
  do {
    current = inputArray[index] + 1;
    inputArray[index] = current%10;
    index--;
  } while (current > 9 && index >= 0);

  let response;
  if (current > 9) {
    response = [1, ...inputArray].join('');
  } else {
    response = inputArray.join('');
  }
  console.log(response);
  process.exit();
});