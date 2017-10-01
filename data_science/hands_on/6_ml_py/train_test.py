"""
Using train/test to	prevent overfitting of a 
polynomial regression

Let's	just	take	a	polynomial	regression,	
hich	we	covered	earlier,	and	use train/test 
to	try	to	find	the	right	degree	polynomial	
to	fit	a	given	set	of	data
"""

import matplotlib.pyplot as plt
import numpy as np
from pylab import *

#random data
np.random.seed(2)

pageSpeeds = np.random.normal(3.0, 1.0, 100)

purchaseAmount = np.random.normal(50.0, 30.0, 100) / pageSpeeds

trainX = pageSpeeds[:80]
testX = pageSpeeds[80:]

trainY = purchaseAmount[:80]
testY = purchaseAmount[80:]

x = np.array(trainX)
y = np.array(trainY)

testx = np.array(testX)
testy = np.array(testY)

p4 = np.poly1d(np.polyfit(x,y,8))

xp = np.linspace(0,7,100)
axes = plt.axes()
axes.set_xlim([0,7])
axes.set_ylim([0,200])
# plt.scatter(x, y)
# plt.xlabel('Page Speeds')
# plt.ylabel('Purchase Amount')
# plt.plot(xp, p4(xp), c='r')
# plt.grid()
# plt.show()


## Plotting the test data
plt.scatter(testx, testy)
plt.xlabel('Page Speeds')
plt.ylabel('Purchase Amount')
plt.plot(xp, p4(xp), c='r')
plt.grid()
plt.show()