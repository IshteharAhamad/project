class Student:
    def __init__(self):#constroctor and self is point the current instance of the class,allocate memory of the instance
        self.name="jignesh"
        self.roll_no=1719
        self.course="B.Tech"
        self.mobile = 997653333
    def talk(self):
        #""""uhsihbjhbjhdb"""
        print("student name : ",self.name)
        print("student Roll No. :",self.roll_no)
        print("student course : ",self.course)
        print("student mobile No. :",self.mobile)
std=Student()
std.talk()#instance method to call talk method
print(Student.__doc__)
help(Student)
        