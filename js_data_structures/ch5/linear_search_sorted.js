/*
	Linear Search - Sorted
*/
function linearSearchSorted(arr,value) {
	var i = 0;
	var size = size.length;
	for (i = 0; i < size; i++) {
		if (value === arr[i]) {
			return true;
		}
		else if (value < arr[i]) {
			return false;
		}
	}
	return false;
}