# Machine	Learning	with	Python

	* Supervised	and	unsupervised learning 
	* Avoiding	overfitting	by	using	train/test 
	* Bayesian	methods 
	* Implementation of an e-mail spam	classifier	with	NaÃ¯ve	Bayes 
	* Concept	of	K-means	clustering 
	* Example	of	clustering	in	Python 
	* Entropy	and	how	to	measure	it 
	* Concept	of	decision	trees	and	its	example	in	Python 
	* What	is	ensemble	learning 
	* Support	Vector	Machine	(SVM)	and	its	example	using	scikit-learn

## Machine learning	and	train/test

> Machine learning are algorithms	that	can	learn	from	observational	data	and	can	make	predictions	based	on	it

> We've	already	looked	at	regressions. Another	fundamental	concept	in	machine	learning	is	something	called	train/test,	which	lets	us	very cleverly	evaluate	how	good	a	machine	learning	model	we've	made

## Unsupervised	learning

> The	basic	definition	of unsupervised	learning	is	that	you're	not	giving	your	model	any	answers	to	learn	from.	You're	just presenting	it	with	a	group	of	data	and	your	machine	learning	algorithm	tries	to	make	sense	out	of	it	given no	additional	information

> Let's	say	I	give	it	a	bunch	of	different	objects,	like	these	balls	and	cubes	and	sets	of	dice	and	what	not. Let's	then	say	have	some	algorithm	that	will	cluster	these	objects	into	things	that	are	similar	to	each	other based	on	some	similarity	metric.
Now	I	haven't	told	the	machine	learning	algorithm,	ahead	of	time,	what	categories	certain	objects	belong to.	I	don't	have	a	cheat	sheet	that	it	can	learn	from	where	I	have	a	set	of	existing	objects	and	my	correct categorization	of	it.	The	machine	learning	algorithm	must	infer	those	categories	on	its	own.	This	is	an example	of	unsupervised	learning,	where	I	don't	have	a	set	of	answers	that	I'm	getting	it	learn	from.	I'm just	trying	to	let	the	algorithm	gather	its	own	answers	based	on	the	data	presented	to	it	alone.

> The	problem	with	this	is	that	we	don't	necessarily	know	what	the	algorithm	will	come	up	with!	

> If you	don't	know	what	you're	looking	for,	it	can	be	a powerful	tool	for	discovering	classifications	that	you	didn't	even	know	were	there.	We	call	this	a	latent variable.	Some	property	of	your	data	that	you	didn't	even	know	was	there	originally,	can	be	teased	out	by unsupervised	learning.


## Supervised	learning

> Supervised learning is a case	where we have a set of answers that the model can learn from. We give it a set of training data, that the model learns from. It	can	then infer relationships between the features and the categories that we want, and apply that to unseen	new	values - and predict information about them.

> "Going	back	to	our	earlier	example,	where	we	were	trying	to	predict	car	prices	based	on	the	attributes	of those	cars.	That's	an	example	where	we	are	training	our	model	using	actual	answers.	So	I	have	a	set	of known	cars	and	their	actual	prices	that	they	sold	for.	I	train	the	model	on	that	set	of	complete	answers,	and then	I	can	create	a	model	that	I'm	able	to	use	to	predict	the	prices	of	new	cars	that	I	haven't	seen	before. That's	an	example	of	supervised	learning"

### Evaluating supervised learning

> So	how	do	you	evaluate	supervised	learning?	Well,	the	beautiful	thing	about	supervised	learning	is	that we	can	use	a	trick	called	train/test.	The	idea	here	is	to	split	our	observational	data	that	I	want	my	model to	learn	from	into	two	groups,	a	training	set	and	a	testing	set.	So	when	I	train/build	my	model	based	on	the data	that	I	have,	I	only	do	that	with	part	of	my	data	that	I'm	calling	my	training	set,	and	I	reserve	another part	of	my	data	that	I'm	going	to	use	for	testing	purposes.

> I	can	build	my	model	using	a	subset	of	my	data	for	training	data,	and	then	I'm	in	a	position	to	evaluate	the model	that	comes	out	of	that,	and	see	if	it	can	successfully	predict	the	correct	answers	for	my	testing	data

> There	are	some	caveats	to	supervised	learning.	need	to	make	sure	that	both	your	training	and	test	datasets are	large	enough	to	actually	be	representative	of	your	data.	You	also	need	to	make	sure	that	you're catching	all	the	different	categories	and	outliers	that	you	care	about,	in	both	training	and	testing,	to	get	a good	measure	of	its	success,	and	to	build	a	good	model.

> You	have	to	make	sure	that	you've	selected	from	those	datasets	randomly,	and	that	you're	not	just	carving your	dataset	in	two	and	saying	everything	left	of	here	is	training	and	right	here	is	testing.	You	want	to sample	that	randomly,	because	there	could	be	some	pattern	sequentially	in	your	data	that	you	don't	know about.
