/*
    dict like
    
    Interfaces	allow	you	to	have	a	set structure	for	an	application.	They	are	powerful	tools	that	allow	you	to	set structures	for	objects,	functions,	arrays,	and	classes.	You	can	think	of	interfaces as	defining	standards	you	want	your	interface	subsets	to	follow
*/
var x = 5;
var y = 10;
var newNum;
newNum = function (num1, num2) {
    var result = num1 + num2;
    console.log(result);
    return result;
};
var z = newNum(x, y);
var coolArray;
coolArray = ["Apples", "Bananas"];
console.log(coolArray);
