#from typing import _Alias


def wish(name):
    print("hi.. good morning ", name)
"""h = wish #alias method to create alias variable of the wish fnction
h("khan")"""
def deco(func):
    def inner(name):
        if name =="khan":
            print("Welcome to here mr. ",name)
        else:
            return func(name)
    return inner()
Ali = deco(wish)
Ali("khan")
Ali("ishtehar")

