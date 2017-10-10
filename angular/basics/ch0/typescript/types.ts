var myString: string = 'some Text';
var anotherString: string = 'Some more text';

var num1: number =  5;
var cost: number = 1.54;

var yes: boolean = true;
var no: boolean = false;

var arr:string[] = ["one", "two", "three"];
var firstInArr = arr[0];
var arr2:Array<any> = ['a', 'second', 'array'];
var firstInArr2 = arr[0];

var anyType:any = "String Assigned";
anyType = 404;
anyType = true;

/*
    Void:	You	use	void	when	you	don’t	want	a	variable	to	have	any	type	at	all.
    In	TypeScript	using	void	prohibits	you	from	assigning	or	returning	a value.	In	most	cases	you	use	void	when	declaring	a	function	you	don’t want	to	have	a	return	value.
*/
function empty(): void {
    console.log("code goes here");
}


/*
    enum: allows	you	to	give	names	to enumerated	values
*/
enum People {Bob, John, Alex}
var Bob = People.Bob;
var John = People[1];
