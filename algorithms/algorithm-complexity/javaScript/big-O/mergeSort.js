const sizeList = 30
let list = Array(sizeList).fill().map(() => Math.round(Math.random() * 100))

console.log(list);

function mergeSort(list) {
	let listLength = list.length;

	if(listLength > 1) {
		const middle = Math.floor(listLength / 2);
		const left = list.slice(0, middle);
		const right = list.slice(middle);

		mergeSort(left);
		mergeSort(right);

		let i = 0
		let j = 0
		let k = 0

		while (i < left.length && j < right.length) {
			if(left[i] < right[j]) {
				list[k] = left[i];
				i++;
			} else {
				list[k] = right[j];
				j++;
			}
			k++;
		}

		while (i < left.length) {
			list[k] = left[i];
			i++;
			k++;
		}

		while (j < right.length) {
			list[k] = right[j];
			j++;
			k++;
		}

	}
	
	return list
}

mergeSort(list);

console.log('------');

console.log(list);
