class Parent:
    def __init__(self,name):
        print(name)
class Parent2:
    def __init__(self,name):
        print(name)
class Child(Parent2,Parent):#positional inheritance of both class
    def __init__(self):
        super().__init__(name="helllo")
       # Parent2.__init__(self,age=77)
ch = Child()
print(Child.__mro__)
        
