/*
	Time	Complexity:	O(logn).	We	always	take	half	input	and	throwing	out	the	other	half.	So	the	recurrence relation	for	binary	search	is	T(n)	=	T(n/2)	+	c.	Using	master	theorem	(divide	and	conquer),	we	get	T(n)	= O(logn) Space	Complexity:	O(1)
*/

function BinarySearch(arr, value) {
	var low = 0;
	var high = arr.length -1;
	var mid;
	while ((low <= high)) {
		mid = low + Math.floor((high - low)/2);
		if (arr[mid] === value) {
			return true;
		}
		else if (arr[mid] < value) {
			low = mid + 1;
		}
		else{
			high = mid -1
		}
	};
	return false;
}

function BinarySearchRecursive(arr,value) {
	return BinarySearchRecursiveUtil(arr, 0, arr.length - 1, value);
}
function BinarySearchRecursiveUtil(arr, low, high, value) {
	if (low > high) {
		return false;
	}
	var mid = low + Math.floor((high - low)/2);
	if (arr[mid] === value) {
		return true;
	}
	else if (arr[mid] < value) {
		return BinarySearchRecursiveUtil(arr,mid+1,high,value);
	}
	else {
		return BinarySearchRecursiveUtil(arr,low,mid-1,value);
	}
}