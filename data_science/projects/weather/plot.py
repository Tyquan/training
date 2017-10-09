import pickle
import numpy as np
from sklearn import linear_model
import sklearn.metrics as sm
import matplotlib.pyplot as plt


input_file = './data/daily_weather.txt'

# read the data
data = np.loadtxt(input_file)

x = data[:]
y = data[-1]

num_training = int(0.8 * len(x))
num_test = len(x) - num_training

# Training data
X_train, Y_train = x[:num_training], y[:num_training]

# Test data
X_test, Y_test = x[num_training:], y[num_training:]

# Create linear regressor object
regressor = linear_model.LinearRegression()

# Train the model using the training sets
regressor.fit(X_train, Y_train)

# Predict the output
y_test_pred = regressor.predict(X_test)

# print('Prediction:')
# print(y_test_pred)


# plot outputs
plt.scatter(X_test, Y_test, color='green')
plt.plot(X_test, y_test_pred, color='black', linewidth=4)
plt.xticks(())
plt.yticks(())
plt.show()