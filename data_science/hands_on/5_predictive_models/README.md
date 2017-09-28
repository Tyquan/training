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


## Multivariate	regression	and	predicting	car	price

> What	happens	then,	if	we're	trying	to	predict	some	value	that	is	based	on	more	than	one	other	attribute? Let's	say	that	the	height	of	people	not	only	depends	on	their	weight,	but	also	on	their	genetics	or	some other	things	that	might	factor	into	it.	Well,	that's	where	multivariate	analysis	comes	in.	You	can	actually build	regression	models	that	take	more	than	one	factor	into	account	at	once

> 	The	idea	of	multivariate regression	is	this:	what	if	there's	more	than	one	factor	that	influences	the	thing	you're	trying	to	predict?

> Let's	say	that	you're	trying	to	predict	the	price	that a	car	will	sell	for.	It	might	be	based	on	many	different	features	of	that	car,	such	as	the	body	style,	the brand,	the	mileage;	who	knows,	even	on	how	good	the	tires	are.	Some	of	those	features	are	going	to	be more	important	than	others	toward	predicting	the	price	of	a	car,	but	you	want	to	take	into	account	all	of them	at	once.

> So	our	way	forwards	here	is	still	going	to	use	the	least-squares	approach	to	fit	a	model	to	your	set	of observations.	The	difference	is	that	we're	going	to	have	a	bunch	of	coefficients	for	each	different	feature that	you	have.

> for	example,	the	price	model	that	we	end	up	with	might	be	a	linear	relationship	of	alpha,	some constant,	kind	of	like	your	y-intercept	was,	plus	some	coefficient	of	the	mileage,	plus	some	coefficient	of the	age,	plus	some	coefficient	of	how	many	doors	it	has

> Once	you	end	up	with	those	coefficients,	from	least	squares	analysis,	we	can	use	that	information	to	figure out,	well,	how	important	are	each	of	these	features	to	my	model.	So,	if	I	end	up	with	a	very	small coefficient	for	something	like	the	number	of	doors,	that	implies	that	the	number	of	doors	isn't	that important,	and	maybe	I	should	just	remove	it	from	my	model	entirely	to	keep	it	simpler.

	# Multivariate regression using Python

	## statsmodesl makes doing multivariate regression easy

	import  pandas as pd

	# kelly blue book cars data
	df = pd.read_excel('http://cdn.sundog-soft.com/Udemy/DataScience/cars.xls')

	# print(df.head())

	## 	split it up	into the features that we care about
	import statsmodels.api as sm

	## use this Categorical() function in pandas to actually 
	## convert the set of model	names that it sees in the DataFrame	
	## into	a set of numbers
	df['Model_ord'] = pd.Categorical(df.Model).codes

	## My input	for	this model on the x-axis is	mileage	(Mileage), 
	## Model converted to an ordinal value (Model_ord),	
	## and the number of doors (Doors).
	X = df[['Mileage', 'Model_ord', 'Doors']]

	## What I'm trying to predict on the y-axis	is the price (Price).
	y = df[['Price']]

	X1 = sm.add_constant(X)

	## est uses ordinary least squares, OLS, and fits that using the 
	## columns that	I give it, Mileage,	Model_ord, and Doors.	
	est = sm.OLS(y, X1).fit()

	## print out what my model looks like
	print(est.summary())

> The	coefficient	is	a	way	of	determining	which	items	matter,	and	that's	only	true though	if	your	input	data	is	normalized.	That	is,	if	everything's	on	the	same	scale	of	0	to	1.	If	it's	not,	then these	coefficients	are	kind	of	compensating	for	the	scale	of	the	data	that	it's	seeing.	If	you're	not	dealing with	normalized	data,	as	in	this	case,	it's	more	useful	to	look	at	the	standard	errors.	In	this	case,	we	can see	that	the	mileage	is	actually	the	biggest	factor	of	this	particular	model
	
	## print out a new DataFrame that shows the mean price for the given number of doors
	print(y.groupby(df.Doors).mean())

> I	can	see	the	average	two-door	car	sells	for	actually	more	than	the	average	four-door	car.	If	anything there's	a	negative	correlation	between	number	of	doors	and	price,	which	is	a	little	bit	surprising