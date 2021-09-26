def sum(num1,num2):
    if type(num1)==type(num2):
        return num1+num2
    else:
        return "data type are not Same .."
x=sum("hello ","i am khan")
print(x)
print("*****************************************************")
def shop(name, price):#positional argument take the position of argument
    print("product name is -> ",name)
    print("product price is -> ",price)
shop("laptop",45000)
shop(45000,"hcl")