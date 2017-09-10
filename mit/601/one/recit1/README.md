# Recitation Notes

## Creating Objects

### OOP

    * Classes
    * Objects
    * Methods
    * Attributes (Properties)
    
    class Staff601():
        # attribute
        room = "34-501"
        # method
        def sayHi(self):
            print("Hello")

> You can get the type of Staff601
    type(Staff601)
    
> Instatiate a new Object from the class Staff601
    Kpugh = Staff601()
    
> Kpugh now has all of the attributes and methods of Staff601
    print(Kpugh.room)
    Kpugh.sayHi()
    
# Self
> Self is considered the first argument
> Self is refering to whatever object is calling it
> Kpugh.sayHi is like say I the object Kpugh is saying hi (not anyone else)

    class Staff602():
        room = "34-502"
        def __init__(self, greeting):
            self.greeting = greeting
        def sayHi(self):
            print(self.greeting)
            
    Hartz = Staff602("HEEELLLOOO")
    Hartz.sayHi()
        
> Immediately after you instatiate an object __init__ is called






