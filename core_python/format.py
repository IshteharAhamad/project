name = "khan"
rn = 176
sal = 15000
print("{}  is good boy \n{}  Roll no. \n{} salary ".format(name,rn,sal))
print("********************************* remove the duplication *****************************")
str = input("enter string : ")
l = []
for i in str:
    if i not in l:
       a =l.append(i)
out = ''.join(l)

print(out) 