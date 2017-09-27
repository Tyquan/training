from pylab import randn
import numpy as np
import matplotlib.pyplot as plt

age = np.random.normal(21.0, 11.04, 1000)# randn(range(1,24))
time = np.random.normal(24.0, 12.54, 1000)

print(age)
print(time)
plt.xlabel("Age")
plt.ylabel("Time")
axes = plt.axes()
axes.set_xlim([0,25])
axes.set_ylim([0,25])
axes.set_xticks([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25])
axes.set_yticks([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24])
axes.grid()
plt.scatter(age, time)
plt.show()