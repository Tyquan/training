"""
How to build a single variable regression model
"""

import pickle

import numpy as np
from sklearn import linear_model
import sklearn.metrics as sm
import matplotlib.pyplot as plt

input_file = 'data_singlevar_regr.txt'

# read the data
data = np.loadtxt(input_file, delimiter=',')
x, y = data[:, :-1], data[:, -1]

# print('x data:')
# print(x, '\n')
# print('y data:')
# print(y, '\n')
# split into training and testing
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

"""
Compute the performance metrics for the regressor
by comparing the ground truth, which refers to the 
actual outputs, with the predicted outputs:
"""

# compute performance metrics (measure)
print("Linear regressor performance:")
print("Mean absolute error =", round(sm.mean_absolute_error(Y_test, y_test_pred), 2))
print("Mean squared error =", round(sm.mean_squared_error(Y_test, y_test_pred), 2))
print("Median absolute error =", round(sm.median_absolute_error(Y_test,	y_test_pred), 2))
print("Explain variance score =", round(sm.explained_variance_score(Y_test,	y_test_pred), 2))
print("R2 score =", round(sm.r2_score(Y_test, y_test_pred),	2), '\n')

"""
Once the model has been created, we can save it into a file so we
can use it later. Python provides a nice module called pickle that
enables us to do this:
"""

# Model persistence
output_model_file = 'model.pkl'

# Save the model
with open(output_model_file, 'wb') as f:
	pickle.dump(regressor, f)


"""
Let's load the model from the file on the disk and perform prediction
"""

# Load the model
with open(output_model_file, 'rb') as f:
	regressor_model = pickle.load(f)

# Perform prediction on test data
y_test_pred_new = regressor_model.predict(X_test)
print("\nNew mean absolute error =", round(sm.mean_absolute_error(Y_test, y_test_pred_new), 2))