list = [1,2,3,4,5,6,8,7,10]
tuple = (1,4,"khan","hero",99,"yadav")
set = {"heloo ","bro",283,90,"movie"}
dict ={'name':"jignesh yadav",'age':24,'profile':"Engineer"}
for i in tuple:
    print(i)
print("********************************")

for i in list:
    print(i ,end="\t")
print("*******************************")
print()
for i in set:
    print(i)
print("****************************************")
for i in dict:#default only print keys
    print(i)
print("**********************************")
for i in dict.values():# print only values
    print(i)
print("******************************************")
for x,y in dict.items():# x is keys and y is values
    print(x," : ",y)