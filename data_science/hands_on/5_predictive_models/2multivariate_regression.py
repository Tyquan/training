# Multivariate regression using Python

## statsmodesl makes doing multivariate regression easy

import  pandas as pd

# kelly blue book cars data
df = pd.read_excel('http://cdn.sundog-soft.com/Udemy/DataScience/cars.xls')

# print(df.head())

## 	split it up	into the features that we care about
import statsmodels.api as sm

## use this Categorical() function in pandas to actually 
## convert the set of model	names that it sees in the DataFrame	
## into	a set of numbers
df['Model_ord'] = pd.Categorical(df.Model).codes

## My input	for	this model on the x-axis is	mileage	(Mileage), 
## Model converted to an ordinal value (Model_ord),	
## and the number of doors (Doors).
X = df[['Mileage', 'Model_ord', 'Doors']]

## What I'm trying to predict on the y-axis	is the price (Price).
y = df[['Price']]

X1 = sm.add_constant(X)

## est uses ordinary least squares, OLS, and fits that using the 
## columns that	I give it, Mileage,	Model_ord, and Doors.	
est = sm.OLS(y, X1).fit()

## print out what my model looks like
# print(est.summary())


## print out a new DataFrame that shows the mean price 
## for the given number of doors
print(y.groupby(df.Doors).mean())