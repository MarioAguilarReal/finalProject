from rest_framework import parsers, viewsets
from rest_framework.decorators import action, api_view
from rest_framework.response import Response


from .models import Property, Type
from .serializers import PropertySerializer, TypeSerializer

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
            property.save()
            return Response(serializer.data)
        return Response(serializer.errors)

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


