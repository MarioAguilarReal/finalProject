from rest_framework import serializers
from .models import (
    Property,
    Image,
    Type,
)

class ImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Image
        fields = '__all__'

class PropertySerializer(serializers.ModelSerializer):
    images = ImageSerializer(many=True)
    class Meta:
        model = Property
        fields = '__all__'

class TypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Type
        fields = ('id', 'type', 'description')