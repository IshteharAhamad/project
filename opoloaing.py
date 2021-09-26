class King:
    def __init__(self,a) -> None:
        self.a = a
    def __add__(self,other):
        b=self.a +other.a
        return b
    def __sub__(self,other):
        b=self.a -other.a
        return b
    def __mul__(self,other):
        b=self.a *other.a
        return b
    def __floordiv__(self,other):
        b=self.a // other.a
        return b
ad = King(122)
ab = King(13)
print("sum of two number",ad+ab)
print("sum of two number",ad-ab)
print("sum of two number",ad*ab)
print("div of two number  ", ad // ab)
        