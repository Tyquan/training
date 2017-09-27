## Computing	linear	regression	and	r-squared	using Python
import matplotlib.pyplot as plt
import numpy as np
from pylab import *

pageSpeeds = np.random.normal(3.0,2.0,1000)
purhaseAmount = 100 - (pageSpeeds + np.random.normal(0,0.1,1000)) * 3
# plt.scatter(pageSpeeds, purhaseAmount)
# plt.show()
"""
I've	made	a	random,	a	normal	distribution	of	page	speeds	centered	around	3	seconds with	a	standard	deviation	of	1	second.	I've	made	the	purchase	amount	a	linear	function	of	that.	So,	I'm making	it	100	minus	the	page	speeds	plus	some	normal	random	distribution	around	it,	times	3.
You	can	see	just	by	eyeballing	it	that	there's	definitely	a	linear	relationship	going	on	there
"""

## ## Computing linear regression and r-squared using Python and scipy
from scipy import stats
slope, intercept, r_value, p_value, std_err = stats.linregress(pageSpeeds, purhaseAmount)
r_square = r_value ** 2
print(r_square) ## we have a really good fit
def predict(x):
	return slope * x + intercept

fitline = predict(pageSpeeds)
plt.scatter(pageSpeeds, purhaseAmount)
plt.plot(pageSpeeds, fitline, c='r')
plt.show()