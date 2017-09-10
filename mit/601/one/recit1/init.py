## Class of staff using room 601

class Staff601():
    #attribute
    room = '34-501'
    #method
    def sayHi(self):
        print("Hey!")
        
# Instatiate class Staff601 for new User
Kpugh = Staff601()
print("Kpugh Room Number:")
print(Kpugh.room)
print("Kpugh trying to say hi:")
Kpugh.sayHi()


## Class of staff using room 602
class Staff602():
    room = "34-502"
    def __init__(self, greeting):
        self.greeting = greeting
    def sayHi(self):
        print(self.greeting)

# Instatiate class Staff602 for new Users
Hartz = Staff602("HEEELLLO")
Mary = Staff602("WHATS UP?!?")
print("Hartz Room Number:")
print(Hartz.room)
print("Mary Room Number:")
print(Mary.room)

print("Hartz trying to say hi:")
Hartz.sayHi()
print("Mary trying to say hi:")
Mary.sayHi()


















