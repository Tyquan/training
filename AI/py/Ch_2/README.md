# Classification and Regression Using Supervised Learning

## Supervised versus unsupervised learning

> Supervised learning refers to	the	process	of building	a machine learning model that is based on labeled training data. For example, let's	say	that we	want to	build a	system to automatically predict the	income of a	person,	based on various parameters	such as	age, education,	location, and so on. To	do this, we	need to	create a database of people with all the necessary details and label it. By	doing this,	we are telling our algorithm what parameters correspond	to what income.	Based on this mapping, the algorithm will learn	how	to calculate the income	of a person using the parameters provided to it. 

> Unsupervised learning	refers to the process of building a	machine	learning model without relying on labeled training data. In some sense, it is the opposite of what we just discussed in the previous paragraph. Since there are	no labels available, you need to extract insights based on just	the	data given to you. For example, let's say that we want to build	a system where we have to separate a set of	data points	into multiple groups. The tricky thing here	is	that we	don't know exactly what	the	criteria of	separation should be. Hence, an	unsupervised learning algorithm	needs to separate the given	dataset	into a number of groups	in the best	way possible.

## Preprocessing data (preprocess.py)

> We deal with a lot of	raw	data in	the	real world. Machine	learning algorithms	expect data	to be formatted	in a certain way before	they start the training	process. In	order to prepare the data for ingestion	by machine learning	algorithms,	we have to preprocess it and convert it	into the right format.

### Binarization

> This process is used when	we want	to convert our numerical values	into boolean values

### Mean removal

> Mean Removing the	mean is	a common preprocessing technique used in machine learning. It's	usually useful to remove the mean from our feature vector, so that each	feature is centered on zero. We	do this	in order to	remove bias	from the features in our feature vector. 

### Scaling 

> In our feature vector, the value of each feature can vary	between	many random	values. So it becomes important	to scale those features so that it is a	level playing field	for	the	machine learning algorithm to train	on. We don't want any feature to be artificially large or small	just because of	the nature of the measurements. 

### Normalization

> We use the process of	normalization to modify the	values in the feature vector so	that we can measure	them on	a common scale.	In machine learning, we	use	many different forms of normalization. Some	of the most	common forms of	normalization aim to modify	the	values so that they	sum	up to 1. L1 normalization, which refers	to Least Absolute Deviations, works by making sure that	the	sum	of absolute	values is 1	in each	row. L2 normalization, which refers	to least squares, works	by making sure that	the	sum	of squares	is	1. In	general,	L1	normalization	technique	is	considered	more	robust	than	L2	normalization technique.	L1	normalization	technique	is	robust	because	it	is	resistant	to	outliers	in	the	data.	A lot	of	times,	data	tends	to	contain	outliers	and	we	cannot	do	anything	about	it.	We	want	to	use techniques	that	can	safely	and	effectively	ignore	them	during	the	calculations.	If	we	are	solving a	problem	where	outliers	are	important,	then	maybe	L2	normalization	becomes	a	better	choice. 



## Label Encoding (labels.py)
> When we perform classification,	we	usually	deal	with	a	lot	of	labels.	These	labels	can	be	in	the form	of	words,	numbers,	or	something	else.	The	machine	learning	functions	in	sklearn	expect them	to	be	numbers.	So	if	they	are	already	numbers,	then	we	can	use	them	directly	to	start training.	But	this	is	not	usually	the	case.

> To	convert	word	labels into	numbers,	we	need	to	use	a	label	encoder