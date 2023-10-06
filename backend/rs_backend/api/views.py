from rest_framework import parsers, viewsets
from rest_framework.decorators import action, api_view
from rest_framework.response import Response
import json
from rest_framework import status


from .models import Property, Type, Image
from .serializers import PropertySerializer, TypeSerializer, ImageSerializer

class PropertyViewset(viewsets.ModelViewSet):
    queryset = Property.objects.all()
    serializer_class = PropertySerializer
    parser_classes = (parsers.MultiPartParser, parsers.FormParser, parsers.JSONParser)
    http_method_names = ['get', 'post', 'patch', 'delete']

    def list(self, request):
        queryset = Property.objects.all()
        serializer = PropertySerializer(queryset, many=True)
        return Response(serializer.data)

    def create(self, request):
        serializer = PropertySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(status = 400, data=serializer.errors)

    def partial_update(self, request, pk=None):
        property = Property.objects.get(pk=pk)
        serializer = PropertySerializer(property, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)

    def destroy(self, request, pk=None):
        property = Property.objects.get(pk=pk)
        property.delete()
        return Response(status=204)


class ImageViewset(viewsets.ModelViewSet):
    queryset = Image.objects.all()
    serializer_class = ImageSerializer
    parser_classes = (parsers.MultiPartParser, parsers.FormParser, parsers.JSONParser)
    http_method_names = ['get', 'post', 'patch', 'delete']

    def list(self, request):
        queryset = Image.objects.all()
        serializer = ImageSerializer(queryset, many=True)
        return Response(serializer.data)

    def create(self, request):
        data = json.loads(request.data['property'])
        property_instance = Property.objects.get(pk=int(data['id']))

        image_instance = {
            'property': property_instance,
            'image': request.data['image']
        }

        serializer = ImageSerializer(data = image_instance)
        number_of_images = Image.objects.filter(property=property_instance).count()
        if serializer.is_valid():
            unique_filename = f"{data['id']}_{data['name']}_Image_{number_of_images+1}.png"
            image = serializer.save(image=unique_filename)
            image.image = image_instance['image']
            image.image.name = unique_filename
            image.save()
            print("guardado")
            return Response(serializer.data, status=200)
        return Response(serializer.errors)

    def partial_update(self, request, pk=None):
        image = Image.objects.get(pk=pk)
        serializer = ImageSerializer(image, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)

    def destroy(self, request, pk=None):
        image = Image.objects.get(pk=pk)
        image.delete()
        return Response(status=204)
