class Salary:
    def __init__(self,pay,reward):
        self.pay = pay
        self.reward = reward
    def annual_salary(self):
        return (self.pay*12) + self.reward
class Employee:
    def __init__(self,name, position,pay, reward):
        self.name=name
        self.position = position
        self.sal = Salary(pay,reward)
    def total_salary(self):
        return self.sal.annual_salary()
emp = Employee("king","hr",12000,1000)
print(emp.total_salary())