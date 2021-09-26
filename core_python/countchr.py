str = input("enter string : ")
dict ={}
for x in str:
    if x in dict.keys():
        dict[x] = dict[x] +1
    else:
        dict[x]=1
        
for k,v in dict.items():
    print(k,"=",v)