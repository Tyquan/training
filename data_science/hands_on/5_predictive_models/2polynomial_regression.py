import matplotlib.pyplot as plt
from pylab import *
import numpy as np

np.random.seed(2)
pageSpeeds = np.random.normal(3.0, 1.0, 1000)
purchaseAmount = np.random.normal(50.0, 10.0, 1000) / pageSpeeds

x = np.array(pageSpeeds)
y = np.array(purchaseAmount)

p4 = np.poly1d(np.polyfit(x,y, 4))

xp = np.linspace(0,7,100)

## Computing the r-squared error
from sklearn.metrics import r2_score
r2 = r2_score(y, p4(x))
print('R2 Score:')
print(r2)

plt.scatter(x, y)
plt.plot(xp,p4(xp), c='r')
plt.show()