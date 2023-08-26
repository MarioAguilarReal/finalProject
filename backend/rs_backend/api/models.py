from django.db import models

class Property(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    bedrooms = models.PositiveIntegerField()
    bathrooms = models.DecimalField(max_digits=3, decimal_places=1)
    sqft = models.DecimalField(max_digits=10, decimal_places=2)
    location = models.CharField(max_length=200)


    def __str__(self):
        return self.title
    
class Image(models.Model):
    property = models.ForeignKey(Property, on_delete=models.CASCADE)
    image = models.ImageField(upload_to='images/')

    def __str__(self):
        return self.property.title
    
class type(models.Model):
    type = models.CharField(max_length=50)
    description = models.TextField()

    def __str__(self):
        return self.type
    
