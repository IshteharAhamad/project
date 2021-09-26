from ply import Polygon
class Square(Polygon):
    def area(self):
        return self.get_hieght()*self.get_width()