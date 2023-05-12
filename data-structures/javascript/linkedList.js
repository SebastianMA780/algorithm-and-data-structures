/* 
	Visual reference.

	----
	
	export let singlyLinkedList = { 
		head: {
			value: 1,
			next: {
				value: 2,
				next: {
					value: 3,
					next: {
						value: 4,
						next: null,
					}
				}
			}
		}
	} 
*/

class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

class SinglyLinkedList {

	constructor(value) {
		this.head = {
			value,
			next: null,
		}
		this.tail = this.head;
		this.length = 1;
	}

	append(value) {
		const node = new Node(value);
		this.tail.next = node;
		this.tail = node;
		this.length++

		return this;
	}

	prepend(value) {
		const node = new Node(value);
		node.next = this.head;
		this.head = node;
		this.length++

		return this;
	}

	insert(index, value) {
		if(index >= this.length) {
			return this.append(value);
		}
		const node = new Node(value);
		const firstPointer = this.getIndex(index - 1);
		if(!firstPointer) return;
		const holdingPointer = firstPointer.next;
		firstPointer.next = node;
		node.next = holdingPointer;
		this.length++;
		return this;
	}

	getIndex(index) {
		if(isNaN(index)) return null;
		let counter = 0;
		let currentNode = this.head;
		while (counter !== index) {
			currentNode = currentNode.next;
			counter++;
		}

		return currentNode;
	}

}

let myLinkedList = new SinglyLinkedList(1);
console.log({
	myLinkedList
});
myLinkedList.append(2);
myLinkedList.append(3);
myLinkedList.append(4);
myLinkedList.append(5);
myLinkedList.append(6);
console.log({
	myLinkedListInsert: myLinkedList.insert(3,10),
	myLinkedListPrepend: myLinkedList.prepend(0),
});
