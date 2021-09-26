class Parent:
    def __init__(self,name):#without super function only child class constractor exicute
        #self.name=name
        print(name)
class Child(Parent):
    def __init__(self):
        print("hello this is child class")
        Parent.__init__(self,name="now exicute parent class")#without using super function 
ch = Child()
       
       