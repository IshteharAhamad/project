d = {
    "employees":[{"firstName": "John", "lastName": "Doe"}, {"firstName": "Anna", "lastName": "Smith"}, {"firstName": "Peter", "lastName": "Jones"}], 
    
    "owners":[{"firstName": "Jack", "lastName": "Petter"}, {"firstName": "Jessy", "lastName": "Petter"}]
    }
for k,v in d.items():
    print(k,"= ",v)
print(d['employees'][1]['lastName'])