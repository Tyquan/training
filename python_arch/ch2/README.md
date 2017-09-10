# Writing Modifiable and Readable Code

## What is modifiability?
> Modifiability is the degree of ease at which changes can be made to a system, and the flexibility with which the system adapts to such changes.

## Aspects related to Modifiability 
>  related quality attributes that are closely related to modifiability:
    • Readability: Readability can be defined as the ease with which a program's logic can be followed and understood. Readable software is code that has been written in a specific style, following guidelines typically adopted for the programming language used, and whose logic uses the features provided by the language in a concise, clear way. 
    • Modularity: Modularity means that the software system is written in wellencapsulated modules, which do very specific, well-documented functions. In other words, modular code provides programmer friendly APIs to the rest of the system. Modifiability is closely connected to Reusability. 
    • Reusability: This measures the number of parts of a software system, including code, tools, designs, and others, that can be reused in other parts of the system with zero or very little modifications. A good design would emphasize reusability from the beginning. Reusability is embodied in the DRY principle of software development. 
    • Maintainability: Maintainability of a software is the ease and efficiency with which the system can be updated and kept working in a useful state by its intended stakeholders. Maintainability is a metric, which encompasses the aspects of modifiability, readability, modularity and testability. 

### Understanding readability
> Readability is not only related to the aspect of following good coding guidelines, but it also ties up to how clear the logic is, how much the code uses standard features of the language, how modular the functions are, and so on. In fact, we can summarize the different aspects of readability as follows: 
    • Well-written: A piece of code is well-written if it uses simple syntax, uses well-known features and idioms of the language, the logic is clear and concise, and if it uses variables, functions, and class/module names meaningfully; that is, they express what they do. 
    • Well-documented: Documentation usually refers to the inline comments in the code. A well-documented piece of code tells what it does, what its input arguments (if any) are, and what is its return value (if any) along with the logic or algorithm, if any, in detail. It also documents any external library, or API usage and configuration required for running the code either inline or in separate files. 
    • Well-formatted: Most programming languages, especially the open source languages developed over the Internet via distributed but closely-knit programming communities, tend to have well-documented style guidelines. A piece of code that keeps up with these guidelines on aspects such as indentation and formatting will tend to be more readable than something which doesn't. 

> Code which doesn't keep up with these guidelines would in general be lacking on the readability aspect. Lack of readability affects modifiability, and hence, maintainability of the code, thereby incurring ever-increasing costs for the organization in terms of resources— mainly people and time—in maintaining the system in a useful state. 

#### Python and readability 
> Python is a language that has been designed from the ground-up for readability.

> Python, as a language, emphasizes readability. It achieves this by clear, concise keywords, which mimic their English language counterparts, using minimal operators

> For example, here is one way to iterate through a sequence in Python while also printing its index:
    for idx in range(len(seq)):    
        item = seq[idx]    
        print(idx, '=>', item) 
        
> However, a more common idiom used in Python is to use the enumerate() helper for iterators, which returns a two tuple of (idx, item) for each item in the sequence:
    for idx, item in enumerate(seq):    
        print(idx, '=>', item)

> In many programming languages like C++, Java, or Ruby, the first version would be considered equally good as the second version. However, in Python, there are certain idioms of writing code, which keep up with the language's principles—the Zen— than certain others. 

> Python, by its design principles and clean syntax, makes writing readable code easy.

### Fundamentals of Modifiability – Cohesion & Coupling
> The cohesion refers to how tightly the responsibilities of a module are related to each other. A module which performs a specific task or group of related tasks has high cohesion. A module in which a lot of functionality is dumped without a thought as to the core functionality would have low cohesion. 

> The coupling is the degree to which the functionality of two modules A and B are related.  Two modules are strongly coupled if their functionality overlaps strongly at the code level—in terms of function or method calls. Any changes in module A would probably require changes in module B. 

> Strong coupling is always prohibitory for modifiability, as it increases the cost of maintaining the code base. Code which aims to increase modifiability should aim for high cohesion and low coupling.

#### Measuring cohesion and coupling 
> Let us look at a simple example of two modules to figure out how we can measure coupling and cohesion quantitatively. The following is the code for module A, which purportedly implements functions that operate with a series (array) of numbers: (a.py)

> Next is the listing of module B. (b.py)
