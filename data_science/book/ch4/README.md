# Linear Algebra
> Linear algebra is the branch of mathematics that deals with vector spaces.



## Vectors
> Abstractly, vectors are objects that can be added together (to form new vectors) and that can be multiplied by scalars (i.e., numbers), also to form new vectors. 
> Concretely (for us), vectors are points in some finite-dimensional space. Although you might not think of your data as vectors, they are a good way to represent numeric data. 
> Concretely (for us), vectors are points in some finite-dimensional space. Although you might not think of your data as vectors, they are a good way to represent numeric data.
    height_weight_age = [70, #inches
                         170, #pounds
                         40 # years]
    grades = [95, #exam1
              80, #exam2
              75, #exam3
              62 #exam4]
> One problem with this approach is that we will want to perform arithmetic on vectors. Because Python lists aren’t vectors (and hence provide no facilities for vector arithmetic), we’ll need to build these arithmetic tools ourselves

> To begin with, we’ll frequently need to add two vectors. Vectors add componentwise. This means that if two vectors v and w are the same length, their sum is just the vector whose first element is v[0] + w[0], whose second element is v[1] + w[1], and so on. (If they’re not the same length, then we’re not allowed to add them.)

> We can easily implement this by zip-ing the vectors together and using a list comprehension to add the corresponding elements:
    def vector_add(v, w):
        """adds corresponding elements"""
        return [v_i + w_i for v_i, w_i in zip(v, w)]

    def vector_subtract(v, w):
        """subtracts corresponding elements"""
        return [v_i - w_i for v_i, w_i in zip(v, w)]

> We’ll also sometimes want to componentwise sum a list of vectors. That is, create a new vector whose first element is the sum of all the first elements, whose second element is the sum of all the second elements, and so on. 
    def vector_sum(vectors):
        """sums all corresponding elements"""
        result = vectors[0] # start with the first vector 
        for vector in vectors[1:]: # then loop over the others
            result = vector_add(result, vector) #and add them to the result
        return result
> We’ll also need to be able to multiply a vector by a scalar, which we do simply by multiplying each element of the vector by that number:
    def scalar_multiply(c, v):
        """c is a number, v is a vector"""
        return [c * v_i for v_i in v]
> This allows us to compute the componentwise means of a list of (same-sized) vectors:
    def vector_mean(vectors):
        """compute the vector whose inth element is the mean of the inth elements of the input vectors"""
        vectors_length = len(vectors)
        return scalar_multiply(1/vectors_length, vector_sum(vectors))
> A less obvious tool is the dot product. The dot product of two vectors is the sum of their componentwise products:
    def dot(v, w):
        """v_1 * w_1 + ... + v_n * w_n"""
        return sum(v_i * w_i for v_i, w_i in zip(v, w))
> The dot product measures how far the vector v extends in the w direction. For example, if w = [1, 0] then dot(v, w) is just the first component of v. Another way of saying this is that it’s the length of the vector you’d get if you projected v onto w
> Using this, it’s easy to compute a vector’s sum of squares:
    def sum_of_squares(v):
        """v_1 * v_1 + ... + v_n * v_n"""
        return dot(v, v) 
        
> Which we can use to compute its magnitude (or length):
    import math
    def magnitude(v):    
        return math.sqrt(sum_of_squares(v))   # math.sqrt is square root function
> We now have all the pieces we need to compute the distance between two vectors:
    def squared_distance(v, w):    
        """(v_1 - w_1) ** 2 + ... + (v_n - w_n) ** 2"""    
        return sum_of_squares(vector_subtract(v, w))
    def distance(v, w):   
        return math.sqrt(squared_distance(v, w))
> That should be plenty to get us started. We’ll be using these functions heavily throughout the book.



## Matrices
> A matrix is a two-dimensional collection of numbers. We will represent matrices as lists of lists, with each inner list having the same size and representing a row of the matrix. 
> If A is a matrix, then A[i][j] is the element in the ith row and the jth column. Per mathematical convention, we will typically use capital letters to represent matrices. 
>For example:
    # A has 2 rows and 3 columns
    A = [[1, 2, 3],[4, 5, 6]]
    # B has 3 rows and 2 columns
    B = [[1, 2],[3, 4],[5, 6]]
> Given this list-of-lists representation, the matrix A has len(A) rows and len(A[0]) columns, which we consider its shape:
    def shape(A):    
        num_rows = len(A)  
        # number of elements in first row   
        num_cols = len(A[0]) if A else 0   return num_rows, num_cols
> If a matrix has n rows and k columns, we will refer to it as a n×k matrix. We can (and sometimes will) think of each row of a n×k matrix as a vector of length k, and each column as a vector of length n:
    def get_row(A, i):
        # A[i] is already the ith row
        return A[i]             
    def get_column(A, j): 
        # jth element of row A_1   
        return [A_i[j] for A_i in A]   # for each row A_i
> We’ll also want to be able to create a matrix given its shape and a function for generating its elements
    def make_matrix(num_rows, num_cols, entry_fn):
        """returns a num_rows x num_cols matrix    whose (i,j)th entry is entry_fn(i, j)"""
        return [[entry_fn(i, j) for j in range(num_cols)] for i in range(num_rows)]
> Given this function, you could make a 5 × 5 identity matrix (with 1s on the diagonal and 0s elsewhere) with:
