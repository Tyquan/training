/*
    dict like
    
    Interfaces	allow	you	to	have	a	set structure	for	an	application.	They	are	powerful	tools	that	allow	you	to	set structures	for	objects,	functions,	arrays,	and	classes.	You	can	think	of	interfaces as	defining	standards	you	want	your	interface	subsets	to	follow
*/

interface Person {
    hairColor: string;
    age: number;
    alive?: Boolean;
}


/*
You	can	define	an	interface	for	functions	in	TypeScript.	This	helps	ensure	that functions	take	in	specific	types	of	parameters
*/
interface AddNums {
    (num1: number, num2: number)
}
var x: number = 5;
var y: number = 10;

var newNum: AddNums;
newNum = function(num1: number, num2: number) {
    var result: number = num1 + num2;
    console.log(result);
    return result;
}

var z = newNum(x,y);

/*
Interfaces	also	allow	you	to	define	how	you	would	like	arrays	to	look.	You	give arrays	the	index	type	to	define	the	types	allowed	for	an	object’s	index.	You	then give	the	return	type	for	the	index
*/

interface Stringy {
    [index: number]: string;
}
var coolArray: Stringy;
coolArray = ["Apples", "Bananas"];
console.log(coolArray);