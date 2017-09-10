import numpy as np

"""create a rank 1 array (1 row 3 columns)"""
an_array = np.array([3, 33, 333])
# print(type(an_array)) #nd.nparray

# print(an_array.shape) # it should have just one dimension with 3 elements

# we only need one index to access each element since its one dimensional
#print(an_array[0], an_array[1], an_array[2]) # print each column

an_array[0] = 888 # nd array elements are mutable
#print(an_array[0], an_array[1], an_array[2]) # print each column





"""How to create a rank 2 numpy array"""

another = np.array([[11,12,13],[21,22,23]])
# print(another) # prints a 2 dimensional array (2 rows and 3 columns)

# print(another[0,0]) # access row 1 column 1 (11)
# print(another[0,1]) # access row 1 column 2 (12)
# print(another[1,0]) # access row 2 column 1 (21)
# print(another[1,1]) # access row 2 column 1 (22)




# create a 2x2 array of zeros
ex1 = np.zeros((2,2))
# print(ex1)


# create a 2x2 array filled with 9.0
ex2 = np.full((2,2), 9.0)
# print(ex2)

# create a 2x2 matrix with the diagonal 1s and the others 0
ex3 = np.eye(2,2)
# print(ex3)

# create an array of ones
ex4 = np.ones((1,2))
# print(ex4)
# print(ex4.shape)

# create a 2d array of random floats between 0 and 1
ex5 = np.random.random((2,2))
# print(ex5)

# create a 1d array of random floats between 0 and 1
ex6 = np.random.random((1,2))
# print(ex6)






"""Slicing and indexing np arrays"""

# rank 2 array of shape(3,4)
an_array = np.array([[11,12,13,14],[21,22,23,24],[31,32,33,34]])
# print(an_array)

# use array slicing to get a subarray consisting of the first 2 rows ans 3 colums
a_slice = an_array[:2, 1:3]
print(a_slice)