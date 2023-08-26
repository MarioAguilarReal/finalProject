from rest_framework import generics
from .models import Property, Type
from .serializers import PropertySerializer, TypeSerializer

class PropertyList(generics.ListCreateAPIView):
    queryset = Property.objects.all()
    serializer_class = PropertySerializer

class PropertyDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Property.objects.all()
    serializer_class = PropertySerializer

<<<<<<< HEAD
class PropertyImageList(generics.ListCreateAPIView):
    queryset = Property.objects.all()
    serializer_class = PropertySerializer

class PropertyImageDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Property.objects.all()
    serializer_class = PropertySerializer

=======
class TypeListView(generics.retriveUpdateDestroyAPIView):
    queryset = Type.objects.all()
    serializer_class = TypeSerializer
>>>>>>> master
