
list =[1,2,3,4,4,3,2,1,5,5]
list2 =[]
for i in list:
    if i not in list2:
        list2.append(i)
print(list2)