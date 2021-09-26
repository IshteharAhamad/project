class Myexcep(Exception): #own exception create
    def __init__(self,arg):
        self.arg = arg
class Tea:
     
    def __init__(self,temp) -> None:
        self.temp = temp
        
    def display(self):
        if self.temp>85:
            raise Myexcep("but not testy")
           # print("it's too hot")
        if self.temp <65:
            print("Too cold...")
        else:
            print("OK.. to drink ..")
             #create exception in program (bank balance checking)

t = Tea(90)
t.display()     