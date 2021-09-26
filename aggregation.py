class Salary:
    def __init__(self,pay,reward):
        self.pay = pay
        self.reward = reward
    def annual_salary(self):
        return (self.pay*12) + self.reward
class Employee:
    def __init__(self,name, position,sal):
        self.name=name
        self.position = position
        self.sal = sal # here pass the object of the Salary class that is aggregation
    def total_salary(self):
        return self.sal.annual_salary()
sal = Salary(7777,2223)
emp = Employee("king","hr",sal)
print(emp.total_salary())