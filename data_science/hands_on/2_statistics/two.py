import numpy as np
import matplotlib.pyplot as plt

# Uniform distribution
values = np.random.uniform(-10.0, 10.0, 100000)
# plt.hist(values, 50)
# plt.show()

# The	preceding	code says,	I	want	a	
# uniformly	distributed	random	set	of	values	
# that	ranges	between	-10	and	10,	and	I	want 
# 100000 of	them



# Normal or	Gaussian distribution
from scipy.stats import norm
x = np.arange(-3,3, 0.001)
# plt.plot(x, norm.pdf(x))
# plt.show()

## The exponential probability distribution	or 
## Power law
from scipy.stats import expon
y = np.arange(0,10,0.001)
# plt.plot(y, expon.pdf(y))
# plt.show()


## Poisson	probability	mass	function
from scipy.stats import poisson
mu = 500
z = np.arange(400, 600, 0.5)
# plt.plot(z, poisson.pmf(z, mu))
# plt.show()

## Computing percentiles in	Python
vals = np.random.normal(0, 0.5, 10000)
vals_percentile = np.percentile(vals, 50)
# print(vals_percentile)
# plt.hist(vals, 50)
# plt.show()


## Computing Moments in	Python
vals_mean = np.mean(vals)
print('Vals Mean:')
print(vals_mean)
vals_variance = np.var(vals)
print('Vals Variance:')
print(vals_variance)
import scipy.stats as sp
vals_skew = sp.skew(vals)
print('Vals Skew:')
print(vals_skew)
vals_kurtosis = sp.kurtosis(vals)
print('Vals Kurtosis:')
print(vals_kurtosis)