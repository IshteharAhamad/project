def student(name,course,*mark):#values argument store values in tuple
    print("student Name : ",name)
    print("Student course : ",course)
    
    for i in mark:
        print("Mark of Subject : ",i)
student("vishal","B.tech",90,80,77)