from rest_framework import generics
from .models import Property, Type
from .serializers import PropertySerializer, TypeSerializer

class PropertyListCreateView(generics.ListCreateAPIView):
    queryset = Property.objects.all()
    serializer_class = PropertySerializer

class PropertyRetieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Property.objects.all()
    serializer_class = PropertySerializer

class TypeListView(generics.retriveUpdateDestroyAPIView):
    queryset = Type.objects.all()
    serializer_class = TypeSerializer