# Predictive Modeling

## Linear Regression

> It's all about trying to fit a curve or some	sort of function, to a set of observations	and	then	using	that	function	to	predict	new values	that	you	haven't	seen	yet.


### The ordinary least squares technique

> Linear Regression uses a technique called ordinary least squares; it's also known as, OLS.
The	way	it	works	is	it	tries	to minimize	the	squared	error	between	each	point	and	the	line,	where	the	error	is	just	the	distance	between each	point	and	the	line that you have


### The gradient Descent Technique

> There is more than one way to do linear regression. The gradient Descent Technique works best in three-dimensional data

> Usually	though,	least	squares	is	a	perfectly	good	choice	for	doing	linear	regression,	and	it's	always	a legitimate	thing	to	do,	but	if	you	do	run	into	gradient	descent,	you	will	know	that	that	is	just	an	alternate way	of	doing	linear	regression,	and	it's	usually	seen	in	higher	dimensional	data.


### The	co-efficient	of	determination	or	r-squared

> So how do	I know how good	my regression is? How well does	my line	fit	my data? That's	where rsquared comes in, and r-squared is also known as the coefficient of determination.
> It	is	the	fraction	of	the	total	variation	in	Y	that	is	captured	by	your	models.	So	how	well	does	your	line follow	that	variation	that's	happening?	Are	we	getting	an	equal	amount	of	variance	on	either	side	of	your line	or	not?	That's	what	r-squared	is	measuring.
> For	r-squared,	you	will	get	a	value	that	ranges	from	0	to	1.	Now	0	means	your	fit	is	terrible.	It	doesn't capture	any	of	the	variance	in	your	data.	While	1	is	a	perfect	fit,	where	all	of	the	variance	in	your	data gets	captured	by	this	line,	and	all	of	the	variance	you	see	on	either	side	of	your	line	should	be	the	same	in that	case.	So	0	is	bad,	and	1	is	good

## Polynomial Regression

> Polynomial Regression using	higher order polynomials to	fit	your data. So, sometimes your data might not really	be appropriate for a straight line. That's where polynomial regression comes in.

> Polynomial	regression	is	a	more	general	case	of	regression.	So	why	limit	yourself	to	a	straight	line? Maybe	your	data	doesn't	actually	have	a	linear	relationship,	or	maybe	there's	some	sort	of	a	curve	to	it, right?	That	happens	pretty	frequently

> Beware	of	overfitting!

	* Don't	use	more	degrees	than	you	need
	* Visualize	your	data	first	to	see	how	complex	of	a	curve	there	might	really	be 
	* Visualize	the	fit	and	check	if	your	curve	going	out	of	its	way	to	accommodate outliers 
	* A high r-squared simply means your curve fits	your training data well; it	may	or may not be good predictor

### Computing	the	r-squared	error
> we	can	measure	the	r-squared	error.	By	taking	the	y	and	the	predicted	values	(p4(x))	in	the	r2_score() function	that	we	have	in	sklearn.metrics,	we	can	compute	that.

> Our	code	compares	a	set	of	observations	to	a	set	of	predictions	and	computes	r-squared	for	you,	and	with just	one	line	of	code