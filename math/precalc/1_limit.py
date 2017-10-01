#limits

def f(x):
	return x - 1 / x -1


# example
import matplotlib.pyplot as plt
def g(x):
	if x == 1:
		return 2
	else:
		return x ** 2

# print(g(2))

## what is the limit as x approaches 2 (what is g(x) approaching)
print(g(1.9))
print(g(1.99))
print(g(1.999))
print(g(1.9999)) # we are getting closer and closer to 4

plt.plot(2)
plt.show()