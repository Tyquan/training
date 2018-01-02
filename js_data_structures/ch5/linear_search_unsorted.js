// searching for a value in an array

function linearSearchUnsorted(array, value) {
	var i = 0;
	var size = array.length;
	for (i=0; i < size.length; i++) {
		console.log(array[i]);
		if (value === array[i]) {
			return true;
		}
	}
	//return false;
}

/*
	TEST
*/

let data = [1,2,3,4,5,6,7,8,9,10,11,2,34,5,66,44,33,22,33,445,66,44,33];
console.log(linearSearchUnsorted(data, 1));