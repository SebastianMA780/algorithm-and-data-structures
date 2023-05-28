/* 
		example:
				10
		5		  	 13
	2		7	  11		16
*/

class Node {
	constructor(value) {
		this.left = null;
		this.right = null;
		this.value = value;
	}
}

class BinarySearchTree {
	constructor() {
		this.root = null;
	}

	insert(value) {
		if(isNaN(value)) throw new Error('Value must be a number');

		const newNode = new Node(value);
		if(!this.root) {
			this.root = newNode;
		} else {
			let currentNode = this.root;
			while(true) {
				if(value < currentNode.value) {
					if(!currentNode.left) {
						currentNode.left = newNode;
						return this;
					}
					currentNode = currentNode.left;
				} else {
					if(!currentNode.right) {
						currentNode.right = newNode;
						return this
					}
					currentNode = currentNode.right;
				}
			}
		}
	}

	search(value) {
		if(isNaN(value)) throw new Error('Value must be a number');

		let currentNode = this.root;

		while (currentNode) {
			if (value === currentNode.value) {
					return currentNode;
			}

			if (value < currentNode.value) {
					currentNode = currentNode.left;
			} else {
					currentNode = currentNode.right;
			}
		}

		return null;
	}
}

const tree = new BinarySearchTree();
tree.insert(10);
tree.insert(5);
tree.insert(2);
tree.insert(7);
tree.insert(13);
tree.insert(11);
tree.insert(16);

console.log(tree.search(33));
console.log(tree.search(11));
console.log(tree);