""" Module B (b.py) – Implement functions provide some statistical methods """

import a

def rms(narray):
    """ Return root mean square of array of numbers """
    return pow(sum(a.square(narray)), 0.5)

def mean(array):
    """ Return mean of an array of numbers """
    return 1.0 * sum(array) / len(array)

def variance(array):
    """ Return variance of an array of numbers """
    # square of variation from mean
    avg = mean(array)
    array_d = [(x - avg) for x in array]
    variances = sum(a.square(array_d))
    return variances

def standard_deviation(array):
    """ Return standard deviation of an array of numbers """
    # S.D is square root of variance
    return pow(variance(array), 0.5)