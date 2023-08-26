from rest_framework import serializers
from .models import Property, Type

class PropertySerializer(serializers.ModelSerializer):
    class Meta:
        model = Property
<<<<<<< HEAD
        fields = ('id', 'title', 'description', 'price', 'bedrooms', 'bathrooms', 'sqft', 'location')

class ImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Property
        fields = ('id', 'image')
=======
        fields = '__all__'


class TypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Type
        fields = ('type','description')

        
>>>>>>> master
