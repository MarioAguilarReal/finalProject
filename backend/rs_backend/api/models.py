from django.db import models
from users.models import User

class Property(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    bedrooms = models.PositiveIntegerField()
    bathrooms = models.DecimalField(max_digits=3, decimal_places=1)
    sqft = models.DecimalField(max_digits=10, decimal_places=2)
    location = models.CharField(max_length=200)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    # owner = models.ForeignKey(User, on_delete=models.CASCADE)
    # type = models.ForeignKey('Type', on_delete=models.CASCADE)

    def __str__(self):
        return self.title
    
class Image(models.Model):
    property = models.ForeignKey(Property, on_delete=models.CASCADE)
    image = models.ImageField(upload_to='images/')

    def __str__(self):
        return self.property.title
    
class Type(models.Model):
    type = models.CharField(max_length=50, default='For Sale', blank=True, null=True, help_text='For Rent or For sale')
    description = models.TextField(blank=True)

    def __str__(self):
        return self.type
    
