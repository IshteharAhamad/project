n = int(input("Enter the string : "))
m = int(input("Enter second string : "))
try:
   c =n/m 
  # raise Exception()
   print(c)
except Exception as e:
    print(e)

else:
    print("else block")

finally:
    print("close db connection..")
print("bye bye...")