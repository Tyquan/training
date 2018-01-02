/*
Below	is	the	API	of	array: 1.	Adds	an	element	at	kth	position Value	can	be	stored	in	array	at	Kth	position	in	O(1)	constant	time.	We	just	need	to	store	value	at arr[k]. 2.	Reading	the	value	stored	at	kth	position. Accessing	value	stored	at	kth	location	in	array	in	O(1)	constant	time.	We	just	need	to	read	value stored	at	arr[k].
*/

function createArray(){
	let numbers = new Array(10);
	let sum = 0;
	console.log(`creating custom array....`);
	for (const i of numbers) {
		numbers[i] = i;
	}
	console.log(`Numbers: ${numbers}`);
	return numbers;
}

createArray(); 