from scipy.stats import norm
import matplotlib.pyplot as plt
import numpy as np

"""
norm.pdf(values, mean, standardDeviation)

	I import matplotlib.pyplot as plt, and with 
	this, we can refer to it as	plt	from now on 
	in this	notebook. Then,	I use np.arange(-3,	3,	0.001) 
	to create an x-axis	filled with	values between 
	-3 and 3 at increments of 0.001, and use pyplot's
	plot() function	to plot	x. The y function will be norm.pdf(x). 
	So I'm going to	create a probability density function with a 
	normal distribution	based on the x values, and I'm 
	using the scipy.stats norm package to do that.
"""
x = np.arange(-3,3,0.001)
print(x)
# plt.plot(x, norm.pdf(x))
# plt.show()


## Generating	multiple	plots	on	one	graph
# plt.plot(x, norm.pdf(x))
# plt.plot(x, norm.pdf(x, 1.0, 0.5))
# plt.show()



"""
	Let's	say	that	I	don't	like	the	default	choices	of	the	axes	of	this	value	in	the	previous	graph.	It's automatically	fitting	it	to	the	tightest	set	of	the	axis	values	that	you	can	find,	which	is	usually	a	good	thing to	do,	but	sometimes	you	want	things	on	an	absolute	scale
"""
## Adjusting	the	axes
# axes = plt.axes()
# axes.set_xlim([-5,5])
# axes.set_ylim([0,1.0])
# axes.set_xticks([-5,-4,-3,-2,-1,0,1,2,3,4,5])
# axes.set_yticks([0,	0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8,	0.9, 1.0])
# axes.grid()
# plt.plot(x, norm.pdf(x))
# plt.plot(x, norm.pdf(x, 1.0, 0.5))
# plt.show()


## Changing	line	types	and	colors
# axes = plt.axes()
# axes.set_xlim([-5,5])
# axes.set_ylim([0,1.0])
# axes.set_xticks([-5,-4,-3,-2,-1,0,1,2,3,4,5])
# axes.set_yticks([0,	0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8,	0.9, 1.0])
# axes.grid()
# plt.plot(x, norm.pdf(x), 'b-')
# plt.plot(x, norm.pdf(x, 1.0, 0.5), 'r:')
# plt.show()


## Adding Labels
# axes = plt.axes()
# axes.set_xlim([-5,5])
# axes.set_ylim([0,1.0])
# axes.set_xticks([-5,-4,-3,-2,-1,0,1,2,3,4,5])
# axes.set_yticks([0,	0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8,	0.9, 1.0])
# axes.grid()
# plt.xlabel('Greebles')
# plt.ylabel('Probability')
# plt.plot(x, norm.pdf(x), 'b-')
# plt.plot(x, norm.pdf(x, 1.0, 0.5), 'r:')
# plt.legend(['Sneetches', 'Gacks'], loc=4)
# plt.show()



## comic example
# plt.xkcd() #gives a comic style
# fig = plt.figure()
# ax = fig.add_subplot(1,1,1)
# ax.spines['right'].set_color('none')
# ax.spines['top'].set_color('none')
# plt.xticks([])
# plt.yticks([])
# ax.set_ylim([-30, 10])
# data = np.ones(100)
# data[70:] -= np.arange(30)
# plt.annotate('THE DAY I REALIZED\nI COULD COOK BACON\nWHENEVER I WANTED', xy=(70,1), arrowprops=dict(arrowstyle='->'), xytext=(15,-10))
# plt.plot(data)
# plt.xlabel('time')
# plt.ylabel('my overall health')
# plt.show()



## Generating	pie	charts
plt.rcdefaults() #removes any funny graphs from earlier
# values = [12,55,4,32,14]
# colors = ['r', 'g', 'b', 'c', 'm']
# explode = [0,0,0.2,0,0]
# labels = ['India', 'United States', 'Russia', 'China', 'Europe']
# plt.pie(values, colors=colors, labels=labels, explode=explode)
# plt.title('Student Locations')
# plt.show()
"""
You	can	see	in	this	code	that	I'm	creating	a	pie	chart	with	the	values	12,	55,	4,	32,	and	14.	I'm	assigning explicit	colors	to	each	one	of	those	values,	and	explicit	labels	to	each	one	of	those	values.	I'm	exploding out	the	Russian	segment	of	the	pie	by	20%,	and	giving	this	plot	a	title	of	Student	Locations	and	showing	it
"""

## Generating Bar charts
# values = [12,55,4,32,14]
# colors = ['r', 'g', 'b', 'c', 'm']
# plt.bar(range(0,5), values, color=colors)
# plt.show()



## Generating scatter plots
"""
The	way	you	do	that	with	a	scatter	plot	is	you	call	plt.scatter()	using	the	two	axes	that	you	want	to	define, that	is,	the	two	attributes	that	contain	data	that	you	want	to	plot	against	each	other.
Let's	say	I	have	a	random	distribution	in	X	and	Y	and	I	scatter	those	on	the	scatter	plot,	and	I	show	it
"""
from pylab import randn
# X = randn(500)
# Y = randn(500)
# plt.scatter(X,Y)
# plt.show()
"""
	You	can	see	the	sort	of	a	concentration	in	the	center	here,	because of	the	normal	distribution	that's	being	used	in	both	axes,	but	since	it	is	random,	there's	no	real	correlation between	those	two.
"""



## Income example
# incomes = np.random.normal(27000, 15000, 10000)
# plt.hist(incomes, 50)
# plt.show()




## Generating box-and-whisker plots
uniformSkewed = np.random.rand(100) * 100 - 40
high_outliers = np.random.rand(10) * 50 + 100
low_outliers = np.random.rand(10) * -50 - 100
data = np.concatenate((uniformSkewed, high_outliers, low_outliers))
plt.boxplot(data)
plt.show()