from rest_framework import parsers, viewsets
from rest_framework.decorators import action, api_view
from rest_framework.response import Response
import json
from rest_framework import status
from django.template import loader
from django.http import HttpResponse

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


def index(request):
    template=loader.get_template('index.html')
    return HttpResponse(template.render())