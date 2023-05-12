class HashTable {

	constructor(size) {
		this.data = new Array(size);
	}

	hashFunction(key) {
		let hash = 0
		for (let index = 0; index < key.length; index++) {
			hash = (hash + key.charCodeAt(index) * index) % this.data.length;
		}
		return hash;
	}

	set(key, value) {
		if(this.get(key)) {
			return console.log('keys must be uniques');
		}

		const address = this.hashFunction(key);
		console.log(`address: ${address}`);

		if(!this.data[address]) {
			this.data[address] = [];
		}

		this.data[address].push([key, value]);
		return this.data;
	}

	get(key) {
		const address = this.hashFunction(key);
		const currentBucket = this.data[address];
		if(currentBucket) {
			for (let index = 0; index < currentBucket.length; index++) {
				if(currentBucket[index][0] === key) {
					return currentBucket[index][1];
				}
			}
		}
		return undefined;
	}

	remove(key) {
		const address = this.hashFunction(key);
		const currentBucket = this.data[address];

		if(!currentBucket) return console.log('this key does not exists');

		for (let index = 0; index < currentBucket.length; index++) {
			if(currentBucket[index][0] === key) {
				currentBucket.splice(index, 1);
				return console.log('key removed');
			}
		}
	}
}

	const myHashTable = new HashTable(50);
	console.log({
		myHashTable
	});
	myHashTable.set('engineer', 29);
	myHashTable.set('lawyer', 30);
	myHashTable.set('doctor', 31);
	myHashTable.set('engineer', 32); //keys must be unique, this should not been allowed.

	myHashTable.remove('doctor');

	console.log({
		myHashTable,
		getQuantity: [
			myHashTable.get('lawyer'),
			myHashTable.get('engineer'),
			myHashTable.get('doctor'),
		]
	});
