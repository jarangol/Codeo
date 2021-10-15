const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

rl.question('', n => {
	rl.question('', numbersString => {
		const numbers = numbersString.split(' ').map(n => Number(n));
    let sums = [numbers[0]];
    for (let i = 1; i < n; i++) {
      sums[i] = sums[i-1] + numbers[i];
    }
    rl.question('', nQueries => {
      rl.on('line', queryString => {
        const query = queryString.split(' ').map(n => Number(n));
        const p = query[0];
        const q = query[1];
        if (p == 0)
          console.log(sums[q])
        else
          console.log(sums[q] - sums[p-1]);
      });
    });
	});
});