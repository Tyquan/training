import numpy as np
from sklearn import preprocessing

# Create the label encoder object
encoder = preprocessing.LabelEncoder()

# # Define some sample labels
# input_labels = ['red', 'black', 'red', 'green', 'black', 'yellow', 'white']
# # and train it
# encoder.fit(input_labels)
# # Print the mapping between words and numbers
# print("\nLabel mapping:")
# for i, item in enumerate(encoder.classes_):
# 	print(item, '-->', i)

# # Encode a set of labels using the encoder
# test_labels = ['green', 'red', 'black']
# encoded_values = encoder.transform(test_labels)
# print("\nLabels =", test_labels)
# print("Encoded values =", list(encoded_values))

# decode a random set of numbers
encoded_values = [3, 0, 4, 1]
fits = encoder.fit(encoded_values)
decoded_list = encoder.inverse_transform(fits)
print("\nEncoded values =", encoded_values)
# print("\nDecoded values =", decoded_values)