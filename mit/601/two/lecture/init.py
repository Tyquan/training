## functional Programming Example 1

def increment(arg):
    return arg + 1
    
def square(arg):
    return arg * arg
    
# print(increment(7))
# print(square(7))

def applies(opList,arg):
    if len(opList)==0:
        return arg
    else:
        return applies(opList[1:],opList[0](arg))

# print applies([], 7)
# print(applies([increment], 7))

def addLevel(opList, fctList):
    return [x+[y] for y in fctList for x in opList]
    
# print(addLevel([[increment]], [increment, square]))

def findSequence(initial,goal):
    opList = [[]]
    for i in range(1,goal-initial+1):
        opList = addLevel(opList,[increment,square])
        for seq in opList:
            if applies(seq,initial)==goal:
                return seq
                
answer = findSequence(1, 5)
# print('answer = ', answer)


## functional Programming Example 2 Recursion

def exponent(b, n):
    if n == 0:
        return 1
    else:
        return b * exponent(b, n-1)
        
print(exponent(2,6))

def fastExpo(b, n):
    if n == 0:
        return 1
    elif n%2 == 1:
        return b * fastExpo(b, n-1)
    else:
        return fastExpo(b, n/2) ** 2
        
print(fastExpo(2,6))
        
        
        
        
        
        
        