/* 
	Graphs: Interconnected nodes.

	Example:

			2 - 0
		/	\	
	 1 - 3

*/

//Edge list: represents in an array existing connections.
	const edgeGraph = [
		[0,2], //0 - 2
		[2,1], //2 - 1
		[2,3], //2 - 3
		[1,3], //1 - 3
	];

// Adjacent List: Represent connection based on the index.
	const adjacentGraph = [
		[2], //index 0
		[2,3], //index 1
		[0,1,3], //index 2
		[1,2], //index 3
	];

	const hashAdjacentGraph = {
		0: [2],
		1: [2,3],
		2: [0,1,3],
		3: [1,2]
	}

//Adjacent Matrix
	const matrixGraph = [
		[0,0,1,0], // index 0
		[0,0,1,1], // index 1
		[1,1,0,1], // index 2
		[0,1,1,0], // index 3
	]

	const adjacentMatrixGraph = {
		0: [0,0,1,0], 
		1: [0,0,1,1], 
		2: [1,1,0,1],
		3: [0,1,1,0], 
	}

//Exercise
// undirected graph
/* 			
			   1  -	 6
			 /	\		/
	8 - 4			3
			\		/
				5
*/

//  1. Define class and variables we need
//	2. define methods to add vertex and edges
//  3. check results

class Graph {
	constructor() {
		this.nodes = 0;
		this.adjacentList = {}
	}

	addVertex(node) {
		if(!node) return;
		if(this.adjacentList[node]) return;

		this.adjacentList[node] = [];
		this.nodes++;
	}

	addEdge(node1, node2) {
		if(!node1 || !node2) return;

		this.adjacentList[node1]?.push(node2);
		this.adjacentList[node2]?.push(node1);

	}
}

const myGraph = new Graph();
myGraph.addVertex('1')
myGraph.addVertex('3')
myGraph.addVertex('4')
myGraph.addVertex('5')
myGraph.addVertex('6')
myGraph.addVertex('8')

myGraph.addEdge('1','3')
myGraph.addEdge('1','4')
myGraph.addEdge('1','6')

console.log(myGraph);