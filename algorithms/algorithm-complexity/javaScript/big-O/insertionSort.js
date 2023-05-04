const sizeList = 10
let list = Array(sizeList).fill().map(() => Math.round(Math.random() * sizeList))

console.log(list);

function insertionSort(list) {

	for (let index = 1; index < list.length; index++)	{
		let currentValue = list[index];
		let currentPosition = index;

		while (currentPosition > 0 && list[currentPosition - 1] > currentValue) {
			list[currentPosition] = list[currentPosition - 1];
			currentPosition--; 
		}

		list[currentPosition] = currentValue;
	}
}

insertionSort(list);


console.log(list);