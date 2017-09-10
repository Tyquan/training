# State Machines

> notes folder is a pdf of this weeks notes

## Functional Programming
> The procedure apply is a "pure function"
    
    def apply(opList, arg):
        if len(opList) == 0:
            return arg
        else
            return apply(opList[1:]).opList[0](arg))
            
> Its first argument is a list of functions. The procedure applis these functions to the second argument arg and return the result.

    apply([], 7) ## return 7
    apply([increment], 7) ## returns 8
    apply([square], 7) ## returns 49
    apply([increment, square], 7) ## returns 64
    
> The list of procedures uses functions as first-class objects.

> Also notice that the definition of apply is recursive (the definition of apply calls apply)

> Recursion is 
    * an alternative way to implement iteration (looping)
    * a natural generalization of functional programming.
    * powerful way to think about PCAP

> The procedure addLevel is also a pure function.

    def addLevel(opList, fctList):
        return [x+[y] for y in fctList for x in opList]
        
> The first input is a list of sequences-of-operations, each of which is a list of functions.
> The second input is a lis of possible next-functions.
> The code returns a new list of sequences.

    addLevel([[increment]], [increment, square])
    
### Recursion
> Express solution to problem in terms of simpler version of problem

> Example: raising a number to a non-negative integer power
    
        def exponent(b,n):
            if n == 0:
                return 1
            else:
                return b * exponent(b, n-1)
                
        print(exponent(2,6))
        
> Invoking exponent(2,6) generates 6 more invocations of expoenent
> The number of invocations increases in propertin to n (i.e.. linearly)

#### Fast Exponentiation
> There is a straight foward way to speed this process:
    if n is even, then square the result of raising b to the n/2 power
    
    def fastExpo(b, n):
        if n == 0:
            return 1
        elif n%2 == 1:
            return b * fastExpo(b, n-1)
        else:
            return fastExpo(b, n/2) ** 2

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    