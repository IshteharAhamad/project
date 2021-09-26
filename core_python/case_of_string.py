str = input("Enter your name :  ")
substr = input("enter your substring : ")
a = str.upper()
b = str.lower()
c = str.title()
d = str.index(substr)# if not fund the substring then get valueError
print(a,b,c,sep=' ')
f = str.find(substr)
print(f) #if not fund the substring then get -1
print(d)
if substr in str:
    print("match ")





 

