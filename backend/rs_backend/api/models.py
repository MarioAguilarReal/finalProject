from django.db import models

class Property(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    bedrooms = models.PositiveIntegerField()
    bathrooms = models.DecimalField(max_digits=3, decimal_places=1)
    sqft = models.DecimalField(max_digits=10, decimal_places=2)
    location = models.CharField(max_length=200)
    type = models.ForeignKey('Type', on_delete=models.CASCADE)

    def __str__(self):
        return self.title
    

class Type(models.Model):
    type = models.CharField(max_length=100)
    description = models.TextField()

    def __str__(self):
        return self.type
    
