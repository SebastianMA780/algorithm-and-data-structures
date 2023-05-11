# Data Structures.

are a **collection of values**, relationship between them and methods to access the information or manipulate it.

## Resources
- [Data Structure Theory](https://github.com/trekhleb/javascript-algorithms).
- [Data structure Practice](https://leetcode.com/explore/learn/).

<br />

### Types of Data Structures

<br />

<details>
	<summary>Arrays or Lists:</summary>

- are ordered collection of information addressed by indexes, There are arrays of type dynamics and statics:

	- statics: A specific amount of memory assigned because of number of data fixed (slots).
	- dynamics: Amount of memory undefined, this allows you to make modifications to them.

</details>

<br />

<details>
	<summary>Hash Tables:</summary>

- associative data structure (key - value) that use a hash function to address the info.

	- This hash function is used to calculate the index where data is stored.
	- Data is stored in slots o buckets in the table, the number of them is arbitrary
		and it is hash function task determine in which slot a element will be placed.

- useful for search info in a big amount of data.

	- If we have a uniform allocation of hashes, the cost of obtaining any data
	it will be uniform too, since it will not depend on the number of items saved
	since with the hash function we can easily obtain the index.
	

- Its main difference with objects is that a key will be 
	converted into a hash trough a particular hash function.

- hash table collision: two keys or more could be allocated with the same hash.

</details>


