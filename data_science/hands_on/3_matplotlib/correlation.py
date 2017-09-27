import matplotlib.pyplot as plt
import numpy as np
from pylab import *

def de_mean(x):
	xmean = mean(x)
	return [xi - xmean for xi in x]

def correlation(x,y):
	stddevx = x.std()
	stddevy = y.std()
	return covariance(x,y) / stddevx / stddevy

def scatter(x,y):
	plt.scatter(x,y)
	plt.show()

def covariance(x,y):
	"""
	Covariance,	again,	is	defined	as	the	dot	product,	which	is	a	measure	of	the	angle	between	two	vectors,	of a	vector	of	the	deviations	from	the	mean	for	a	given	set	of	data	and	the	deviations	from	the	mean	for another	given	set	of	data	for	the	same	data's	data	points.	We	then	divide	that	by	n	-	1	in	this	case,	because we're	actually	dealing	with	a	sample.
	"""
	n = len(x)
	return dot(de_mean(x), de_mean(y)) / (n-1)

pageSpeeds = np.random.normal(3.0, 1.0, 1000)
# purchaseAmount = np.random.normal(50.0, 10.0, 1000)
# print(covariance(pageSpeeds, purchaseAmount))
# scatter(pageSpeeds,purchaseAmount)

purchaseAmount = np.random.normal(50.0, 10.0, 1000) / pageSpeeds
print('covariance')
print(covariance(pageSpeeds, purchaseAmount))
print('correlation')
print(correlation(pageSpeeds, purchaseAmount), '\n')
scatter(pageSpeeds, purchaseAmount)



## Computing	correlation	–	The	NumPy	way
"""
	NumPy	can	actually	compute	correlation	for	you	using	the	corrcoef()	function
"""
print('Numpy Covariance:')
print(np.cov(pageSpeeds, purchaseAmount))
print('Numpy Correlation:')
print(np.corrcoef(pageSpeeds, purchaseAmount))
