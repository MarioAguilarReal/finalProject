from rest_framework import serializers
from .models import (
    Property,
    Image,
    Type,
)

class PropertySerializer(serializers.ModelSerializer):
    class Meta:
        model = Property
        fields = ('id', 'title', 'description', 'price', 'bedrooms', 'bathrooms', 'sqft', 'location')

class ImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Property
        fields = ('id', 'image')

class TypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Type
        fields = ('id', 'type', 'description')