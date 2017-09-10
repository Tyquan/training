# A has 2 rows and 3 columns
A = [[1,2,3],[4,5,6]]
# B has 3 rows and 2 columns
B = [[1,2],[3,4],[5,6]]

def shape(A):
    num_rows = len(A)
    # number of elements in first row
    num_cols = len(A[0]) if A else 0 
    return num_rows, num_cols

# print(shape(B))

## Get A Specific row
def get_row(A, i):
    # A[i] is already the ith row
    return A[i]

#print(get_row(A, 0))

## Get A Specific Column
def get_column(A, j): 
    # jth element of row A_1   
    return [A_i[j] for A_i in A]   # for each row A_i

#print(get_column(A, 0))

## create a matrix with a callback
def make_matrix(num_rows, num_cols, entry_fn):
    """returns a num_rows x num_cols matrix    whose (i,j)th entry is entry_fn(i, j)"""
    return [[entry_fn(i, j) for j in range(num_cols)] for i in range(num_rows)]

def is_diagonal(i, j):
    """1's on the 'diagonal', 0's everywhere else""" 
    return 1 if i ==j else 0
indentify_matrix_testy = make_matrix(5,5, is_diagonal)
print(indentify_matrix_testy)
