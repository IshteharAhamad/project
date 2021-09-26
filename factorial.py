#polymorphism duck tyring philospy 
class Dog:
    def walk(self):
        print("first ....")
class Horse:
    def walk(self):
        print("tabdak tabdak tabdak...")
class Cat:
    def talk(self):
        print("moew moew..")
def myfunc(obj):
    if hasattr(obj,'walk'):
        obj.walk()
    
d =[Dog(),Horse(),Cat()]
for obj in d:
    myfunc(obj)