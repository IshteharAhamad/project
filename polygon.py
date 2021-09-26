class Polygon:
    __hieght = None
    __width = None
    def set_method(self,hieght,width):
        self.__hieght=hieght
        self.__width=width
    def get_hieght(self):
        return self.__hieght
    def get_width(self):
        return self.__width
class Square(Polygon):
    def area(self):
        return self.get_hieght()*self.get_width()
class Triangle(Polygon):
    def area(self):
        return  self.get_hieght() * self.get_width() *1/2
s=Square()
s.set_method(12,90)
print(s.area())
s1=Triangle()
s1.set_method(132,7)
print(s1.area())

