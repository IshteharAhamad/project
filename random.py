import random
upper_chr = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
lower_chr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
num = ['0','1','2','3','4','5','6','7','8','9']
special_chr = ['!','@','#','$','^','&','*']
password = random.choice(upper_chr)+random.choice(lower_chr)+random.choice(num)+random.choice(special_chr)
print(password)

