str = input("Enter the string : ")
if str.isalnum():
    print("alph numeric character ",str)
    if str.isalpha():
        print("alphabet & numeric characters",str)
        if str.islower():
            print("lawer care character ",str)
        else:
            print("upper care character ",str)
    else:
        print("digit number ",str)
else:
    print("special character ",str)
