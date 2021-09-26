from ply import Polygon
class Triangle(Polygon):
    def area(self):
        return  self.get_hieght() * self.get_width() *1/2