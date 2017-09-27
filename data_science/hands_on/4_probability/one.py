"""
Let's	put	conditional	probability	into	action	here	and	use	some	of	the	ideas	to	figure	out	if	there's	a relationship	between	age	and	buying	stuff	using	some	fabricated	data
"""

from numpy import random
import matplotlib.pyplot as plt

random.seed(0)

totals = {20:0,30:0,40:0,50:0,60:0,70:0}
purchases = {20:0,30:0,40:0,50:0,60:0,70:0}
totalPurchases = 0

for _ in range(100000):
	ageDecade = random.choice([20,30,40,50,60,70])
	purchaseProbability = float(ageDecade) / 100.0
	totals[ageDecade] += 1
	if (random.random() < purchaseProbability):
		totalPurchases += 1
		purchases[ageDecade] += 1

print('Totals:')
print(totals)
print('Purchases:')
print(purchases)
print('Total Purchases:')
print(totalPurchases)
print('\n')


"""
Take	100,000	virtual	people	and	randomly	assign	them	to	an	age	bracket.	They	can be	in	their	20s,	their	30s,	their	40s,	their	50s,	their	60s,	or	their	70s.	I'm	also	going	to	assign	them	a number	of	things	that	they	bought	during	some	period	of	time,	and	I'm	going	to	weight	the	probability	of purchasing	something	based	on	their	age
"""

"""
What	I'm	going	to	do	is	take	100,000	virtual	people	and	randomly	assign	them	to	an	age	bracket.	They	can be	in	their	20s,	their	30s,	their	40s,	their	50s,	their	60s,	or	their	70s.	I'm	also	going	to	assign	them	a number	of	things	that	they	bought	during	some	period	of	time,	and	I'm	going	to	weight	the	probability	of purchasing	something	based	on	their	age
"""

"""
Let's	use	this	data	to	play	around	with	the	ideas	of	conditional	probability.	Let's	first	figure	out	what's	the probability	of	buying	something	given	that	you're	in	your	30s.	The	notation	for	that	will	be	P(E|F)	if	we're calling	purchase	E,	and	F	as	the	event	that	you're	in	your	30s.
"""
print('The Probability of Buying Something given that youre in your 30s:')
print("P(purchase | 30s):")
PEF = float(purchases[30]) / float(totals[30])
print(PEF)
print('\n')


"""
If I want to find P(F), that's just the probability of being 30 overall, I can take the	total number of 30-yearolds divided by the number of people in my dataset, which is	100,000
"""
print('The probability of being 30 overall:')
print("P(30s):")
PF = float(totals[30]) / 100000.0
print(PF)
print('\n')



"""
We'll	now	find	out	P(E),	which	just	represents	the	overall	probability	of	buying	something	irrespective	of your	age
(I can just take the total number of things purchased by everybody regardless of age and divide it by the total number of people to get the overall probability of purchase)
"""
print('The probability of buying something irrespective of your age:')
print("P(Purchase):")
PE = float(totalPurchases) / 100000.0
print(PE)
print('\n')



"""
Take the overall probability of purchase multiplied by the overall probability of being	in your 30s
"""
print('Probability of purchase multiplied by the overall probability of being	in your 30s:')
print("P(30s)P(Purchase):")
TOTAL_A = PE * PF
print(TOTAL_A)
print('\n')



"""
We	can	check	our	equation	that	we	saw	in	the	Conditional Probability	section	earlier,	that	said	that	the	probability	of	buying	something	given	that	you're	in	your	30s is	the	same	as	the	probability	of	being	in	your	30s	and	buying	something	over	the	probability	of	buying something.	That	is,	we	check	if	P(E|F)=P(E,F)/P(F).
"""
print("P(E|F)=P(E,F)/P(F):")
TOTAL_B = (float(purchases[30]) / 100000.0) / PF
print(TOTAL_B)

plt.hist(purchases[30], totals[30])
plt.show()