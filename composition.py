class Engine:
    a=1000
    def __init__(self):
        self.b=20
    def _m1(self):#values and key argument store values in disctionary
        print("Mark of Subject : i")

class Car:
    def __init__(self):
        self.en = Engine()     # using the Engine class property in the Car class
    def _m2(self):
        print("Car using engine class functionality ")
        print(self.en.a)
        print(self.en.b)
        self.en._m1()     #calling tha _m1() function in Car class function 
c = Car()
c._m2()
#c.m1