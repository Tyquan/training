# Searching

## Different Searching Algorithms

	. Linear	Search–Unsorted	Input 
	· Linear	Search–Sorted Input
	· Binary	Search	(Sorted	Input) 
	· String	Search:	Tries,	Suffix	Trees, Ternary	Search. 
	· Hashing	and	Symbol	Tables

### Linear Search - Unsorted Input

> When	elements	of	an	array	are	not	ordered	or	sorted	and	we	want	to	search	for	a	particular	value,	we need	to	scan	the	full	array	unless	we	find	the	desired	value.	This	kind	of	algorithm	known	as	unordered linear	search.	The	major	problem	with	this	algorithm	is	less	performance	or	high	Time	Complexity	in worst	case.

### Linear Search - Sorted
> If	elements	of	the	array	are	sorted	either	in	increasing	order	or	in	decreasing	order,	searching	for	a desired	element	will	be	much	more	efficient	than	unordered	linear	search.	In	many	cases,	we	do	not	need to	traverse	the	complete	array.	Following	example	explains	when	you	encounter	a	greater	element	from the	increasing	sorted	array,	you	stop	searching	further.	This	is	how	this	algorithm	saves	the	time	and improves	the	performance.

> Time	Complexity:	O(n).	As	we	need	to	traverse	the	complete	array	in	worst	case.	Worst	case	is	when your	desired	element	is	at	the	last	position	of	the	sorted	array.	However,	in	the	average	case	this algorithm	is	more	efficient	even	though	the	growth	rate	is	same	as	unsorted. Space	Complexity:	O(1).	No	extra	memory	is	used	to	allocate	the	array.

### Binary Search
> How	do	we	search	a	word	in	a	dictionary?	In	general,	we	go	to	some	approximate	page	(mostly	middle) and	start	searching	from	that	point.	If	we	see	the	word	that	we	are	searching	is	same	then	we	are	done with	the	search.	Else,	if	we	see	the	page	is	before	the	selected	pages,	then	apply	the	same	procedure	for the	first	half	otherwise	to	the	second	half.	Binary	Search	also	works	in	the	same	way.	We	get	the	middle point	from	the	sorted	array	and	start	comparing	with	the	desired	value.