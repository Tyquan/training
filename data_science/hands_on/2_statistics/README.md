# Statistics With Python

## Calculating mean using Numpy package (one.py)

	import	numpy	as	np		
	incomes	=	np.random.normal(27000,	15000,	10000)
	np.mean(incomes)

## Calculating median using Numpy package (one.py)

	import	numpy	as	np		
	incomes	=	np.random.normal(27000,	15000,	10000)
	np.median(incomes)

## Analyzing the effect of outliers (one.py)
> Let's	add	in	an	outlier. We'll take	Bill Gates;	I	think	he	qualifies	as	an	outlier. Let's	go	ahead	and	add	his	income	in.	So	I'm	going	to	manually	add	this	to	the	data	using	np.append,	and	let's say	add	a	billion	dollars	(which	is	obviously	not	the	actual	income	of	Bill Gates)	into	the	incomes data.

	import	numpy	as	np		
	incomes	=	np.random.normal(27000,	15000,	10000)
	incomes = np.append(incomes, [1000000000])
	print(np.median(incomes))
	print(np.mean(incomes))

## Calculating mode using the SciPy	package
	ages = np.random.randint(18, high=90, size=500)
	print(ages)