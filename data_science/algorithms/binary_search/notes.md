# Binary Search

> Binary search is an efficient algorithm for finding an item from an ordered list of items. It works by repeatedly dividing in half the portion of the list that could contain the item, until you've narrowed down the possible locations to just one.

> For example, the Tycho-2 star catalog contains information about the brightest 2,539,913 stars in our galaxy. Suppose that you want to search the catalog for a particular star, based on the star's name. If the program examined every star in the star catalog in order starting with the first, an algorithm called linear search, the computer might have to examine all 2,539,913 stars to find the star you were looking for, in the worst case. If the catalog were sorted alphabetically by star names, binary search would not have to examine more than 22 stars, even in the worst case.

## Pseudocode for binary search

> When describing an algorithm to a fellow human being, an incomplete description is often good enough. Some details may be left out of a recipe for a cake; the recipe assumes that you know how to open the refrigerator to get the eggs out and that you know how to crack the eggs. People might intuitively know how to fill in the missing details, but computer programs do not. That's why we need to describe computer algorithms completely.

> In order to implement an algorithm in a programming language, you will need to understand an algorithm down to the details. What are the inputs to the problem? The outputs? What variables should be created, and what initial values should they have? What intermediate steps should be taken to compute other values and to ultimately compute the output? Do these steps repeat instructions that can be written in simplified form using a loop?

>Let's look at how to describe binary search carefully. The main idea of binary search is to keep track of the current range of reasonable guesses. Let's say that I'm thinking of a number between one and 100, just like the guessing game. If you've already guessed 25 and I told you my number was higher, and you've already guessed 81 and I told you my number was lower, then the numbers in the range from 26 to 80 are the only reasonable guesses.

> In each turn, you choose a guess that divides the set of reasonable guesses into two ranges of roughly the same size. If your guess is not correct, then I tell you whether it's too high or too low, and you can eliminate about half of the reasonable guesses. For example, if the current range of reasonable guesses is 26 to 80, you would guess the halfway point, (26 + 80) / 2 (26+80)/2left parenthesis, 26, plus, 80, right parenthesis, slash, 2, or 53. If I then tell you that 53 is too high, you can eliminate all numbers from 53 to 80, leaving 26 to 52 as the new range of reasonable guesses, halving the size of the range.

> For the guessing game, we can keep track of the set of reasonable guesses using a few variables. Let the variable min minm, i, n be the current minimum reasonable guess for this round, and let the variable max maxm, a, x be the current maximum reasonable guess. The input to the problem is the number n nn, the highest possible number that your opponent is thinking of. We assume that the lowest possible number is one, but it would be easy to modify the algorithm to take the lowest possible number as a second input.

> Here's a pseudocode description of binary search:

    1. Let min = 1  and max = n.
    2. Guess the average of max and min rounded down so that it is an integer.
    3. If you guessed the number, stop. You found it!
    4. If the guess was too low, set min to be one larger than the guess.
    5. If the guess was too high, set max to be one smaller than the guess.
    6. Go back to step two.

> We could make this pseudocode even more precise by clearly describing the inputs and the outputs for the algorithm and by clarifying what we mean by instructions like "guess a number" and "stop." But this will do for now.

## Implementing binary search of an array

> Let's see how to think about binary search on a sorted array. Yes, JavaScript already provides methods for determining whether a given element is in an array and, if it is, its location (as do many programming languages), but we want to implement it ourselves, to understand how you can implement such methods. Here's a JavaScript array of the first 10 prime numbers, in order:
    var primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29];

> Suppose we want to know whether the number 67 is prime. If 67 is in the array, then it's prime.

> We might also want to know how many primes are smaller than 67. If we find the position of the number 67 in the array, we can use that to figure out how many smaller primes exist.

> The position of an element in an array is known as its index. Array indices start at 0 and count upwards. If an element is at index 0 then it is the first element in the array. If an element is at index 3, then it has 3 elements which come before it in the array.

> Looking at the example below, we can read the array of prime numbers from left to right, one at a time, until we find the number 67 (in the pink box) and see that it is at array index 18. Looking through the numbers in order like this is a linear search.
Once we know that the prime number 67 is at index 18, we can identify that it is a prime. We can also quickly identify that there are 18 elements which come before 67 in the array, meaning that there are 18 prime numbers smaller than 67.

> A binary search might be more efficient. Because the array primes contains 25 numbers, the indices into the array range from 0 to 24. Using our pseudocode from before, we start by letting min = 0 and max = 24. The first guess in the binary search would therefore be at index 12 (which is (0 + 24) / 2). Is primes[12] equal to 67? No, primes[12] is 41.

> Is the index we are looking for higher or lower than 12? Since the values in the array are in increasing order, and 41 < 67, the value 67 should be to the right of index 12. In other words, the index we are trying to guess should be greater than 12. We update the value of min to 12 + 1, or 13, and we leave max unchanged at 24.

> What's the next index to guess? The average of 13 and 24 is 18.5, which we round down to 18, since an index into an array must be an integer. We find that primes[18] is 67.

> The binary search algorithm stops at this point, since it has found the answer. It took only two guesses, instead of the 19 guesses that linear search would have taken.

### Pseudocode
> We just described the binary search algorithm in English, stepping through one example. That's one way to do it, but a human language explanation can vary in quality. It can be too short or too long, and most importantly, it's not always as precise as it should be. We could jump to showing you binary search in a programming language like JavaScript or Python, but programs contain lots of details - due to requirements imposed by the programming language, or because programs have to handle errors caused by bad data, user error, or system faults - and those can make it hard to understand the underlying algorithm from studying just the code. That's why we prefer to describe algorithms in something called pseudocode, which mixes English with features that you see in programming languages.

> Here's the pseudocode for binary search, modified for searching in an array. The inputs are the array, which we call array; the number n of elements in array; and target, the number being searched for. The output is the index in array of target:
    Let min = 0 and max = n-1.
    Compute guess as the average of max and min, rounded down (so that it is an integer).
    If array[guess] equals target, then stop. You found it! Return guess.
    If the guess was too low, that is, array[guess] < target, then set min = guess + 1.
    Otherwise, the guess was too high. Set max = guess - 1.
    Go back to step 2.

### Implementing pseudocode

> We'll alternate between English, pseudocode, and JavaScript in these tutorials, depending on the situation. As a programmer, you should learn to understand pseudocode and be able to turn it into your language of choice - so even though we're using JavaScript here, it should be straightforward for you to implement pseudocode using other languages.

> How would we turn that pseudocode into a JavaScript program? We should create a function, because we're writing code that accepts an input and returns an output, and we want that code to be reusable for different inputs. The parameters to the function—let's call it binarySearch— will be the array and target value, and the return value of the function will be the index of the location where the target value was found.

> Now let's go into the body of the function, and decide how to implement that. Step 6 says to go back to step 2. That sounds like a loop. Should it be a for-loop or a while-loop? If you really wanted to use a for-loop, you could, but the indices guessed by binary search don't go in the sequential order that a for-loop makes convenient. First we might guess the index 12, and then 18, based on some computations. So a while-loop is the better choice.

> There's also an important step missing in that pseudocode that didn't matter for the guessing game, but does matter for the binary search of an array. What should happen if the number you are looking for is not in the array? Let's start by figuring out what index the binarySearch function should return in this case. It should be a number that cannot be a legal index into the array. We'll use -1, since that cannot be a legal index into any array. (Actually, any negative number would do.)

> The target number isn't in the array if there are no possible guesses left. In our example, suppose that we're searching for the target number 10 in the primes array. If it were there, 10 would be between the values 7 and 11, which are at indices 3 and 4. If you trace out the index values for min and max as the binarySearch function executes, you would find that they eventually get to the point where min equals 3 and max equals 4. The guess is then index 3 (since (3 + 4) / 2 equals 3.5, and we round down), and primes[3] is less than 10, so that min becomes 4. With both min and max equaling 4, the guess must be index 4, and primes[4] is greater than 10. Now max becomes 3. What does it mean for min to equal 4 and max to equal 3? It means that the only possible guesses are at least 4 and at most 3. There are no such numbers! At this point, we can conclude that the target number, 10, is not in the primes array, and the binarySearch function would return -1. In general, once max becomes strictly less than min, we know that the target number is not in the sorted array. Here is modified pseudocode for binary search that handles the case in which the target number is not present:

    Let min = 0 and max = n-1.
    If max < min, then stop: target is not present in array. Return -1.
    Compute guess as the average of max and min, rounded down (so that it is an integer).
    If array[guess] equals target, then stop. You found it! Return guess.
    If the guess was too low, that is, array[guess] < target, then set min = guess + 1.
    Otherwise, the guess was too high. Set max = guess - 1.
    Go back to step 2.

> Now that we've thought through the pseudocode together, you're going to try implementing binary search yourself. It's fine to look back at the pseudocode - in fact, it's a good thing, because then you'll have a better grasp of what it means to convert pseudocode into a program.

## Challenge: Binary search

> Complete the doSearch function so that it implements a binary search, following the pseudo-code below (this pseudo-code was described in the previous article):
    1. Let min = 0 and max = n-1.
    2. If max < min, then stop: target is not present in array. Return -1.
    3. Compute guess as the average of max and min, rounded down (so that it is an integer).
    4. If array[guess] equals target, then stop. You found it! Return guess.
    5. If the guess was too low, that is, array[guess] < target, then set min = guess + 1.
    6. Otherwise, the guess was too high. Set max = guess - 1.
    7. Go back to step 2.

### HINT

    var doSearch = function(array, targetValue) {
        var min = 0;
        var max = array.length - 1;
        var guess;
        while(){
            guess = ;
            if(===){  }
            else if(<){}
            else{  }
        }
        return -1;
    };


### Mine

    /* Returns either the index of the location in the array,
    or -1 if the array did not contain the targetValue */
    var doSearch = function(array, targetValue) {
        var min = 0;
        var max = array.length - 1;
        var guess;
        
        


        return -1;
    };

    var primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 
            41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];

    var result = doSearch(primes, 73);
    println("Found prime at index " + result);

    //Program.assertEqual(doSearch(primes, 73), 20);

