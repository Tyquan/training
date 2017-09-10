""" Module A (a.py) – Implement functions that operate on series of numbers """

def square(narray):
    """ Return array of squares """
    return pow_n(array, 2)

def cubes(narray):
    """ Return array of cubes of numbers """
    return pow_n(narray, 3)

def pow_n(narray, n):
    """ Return array of numbers raised to arbitrary powr n each"""
    return [pow(x, n) for x in narray]

