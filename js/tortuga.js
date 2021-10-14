process.stdin.on('data', data => {
  const inputString = data.toString();
  const input = inputString.split(' ').map(x => Number(x));
  const N = input[0];
  const X = input[1];
  const Y = input[2];

  let clockwise;
  if (Y >= X) {
    clockwise = Y - X;
  } else {
    clockwise = (N - X) + Y;
  }

  let antiClockwise;
  if (Y <= X) {
    antiClockwise = X - Y;
  } else {
    antiClockwise = X + (N - Y);
  }

  console.log(Math.min(clockwise, antiClockwise));
  process.exit();
});