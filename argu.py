def student(name,course,**mark):#values and key argument store values in disctionary
    print("student Name : ",name)
    print("Student course : ",course)
    
    for i in mark:
        print("Mark of Subject : ",i)
student(name="vishal",course="B.tech",Math=90,English=80,Physics=77)