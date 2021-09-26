class Tea:
     
    def __init__(self,temp) -> None:
        self.temp = temp
        
    def display(self):
        if self.temp>85:
            print("it's too hot")
        if self.temp <65:
            print("Too cold...")
        else:
            print("OK.. to drink ..")
            raise Exception("but not testy") #create exception in program (bank balance checking)

t = Tea(80)
t.display()

        