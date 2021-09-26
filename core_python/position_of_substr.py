str = input("Enter the main string  here : ")
sub = input("Enter here sub string  : ")
flag = False  # default flag
position = -1 #last index position
while True:
    position = str.find(sub,position+1,len(str)) #inceament of position and find substr also length
    if position==-1:
        break
    print("found the position : ",position)
    flag = True
if flag==False:
    print("not found")


