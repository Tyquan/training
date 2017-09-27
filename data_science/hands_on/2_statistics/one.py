import numpy as np

incomes = np.random.normal(27000, 15000, 10000)
# # Calculate the mean of the incomes
# print(np.mean(incomes))

# # plot it in a histogram
import matplotlib.pyplot as plt
# plt.hist(incomes, 50)
# plt.show()

# # Calculate the median of the incomes
# print(np.median(incomes))


# incomes = np.append(incomes, [1000000000])
# print(np.median(incomes))
# print(np.mean(incomes))


## Calculating mode using the SciPy	package
ages = np.random.randint(18, high=90, size=500)
# print(ages)
from scipy import stats
# print(stats.mode(ages))
# plt.hist(ages, 50)
# plt.xlabel('Random Ages')
# plt.show()

#Standard Deviation
print(incomes.std())

# Variance
print(incomes.var())