const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});


readline.question('What size is the list?: ', (val) => {
	let value = parseInt(val);
	let list = Array(value).fill().map(() => Math.round(Math.random() * value))

	console.log(list);

	function bubbleSort(list) {
		for (let i = 0; i < list.length; i++) { 
			for (let j = 0; j < list.length - i - 1; j++) { // O(n) * O(n) = O(n^2) grows quadratically
				if (list[j] > list[j +1]) {
					let temp = list[j];
					list[j] = list[j + 1];
					list[j + 1] = temp;
				}
			}
		}

		return list;
	}

	console.log(bubbleSort(list));

  readline.close();
});
