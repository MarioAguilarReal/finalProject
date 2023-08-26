from rest_framework import serializers
from .models import Property

class PropertySerializer(serializers.ModelSerializer):
    class Meta:
        model = Property
        fields = ('id', 'title', 'description', 'price', 'bedrooms', 'bathrooms', 'sqft', 'location')

class ImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Property
        fields = ('id', 'image')