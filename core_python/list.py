str = input("enter your name : ")
str1 = input("Enter your name : ")
if len(str)==len(str1):   # string length comparision 
    for i in str:
        print(i)
    print(len(str))
else:
    for i in str1:
        print(i ,end='\n')
    print("length of string is : ",len(str1))
