from django.urls import path
from .views import PropertyListCreateView, PropertyRetieveUpdateDestroyView

urlpatterns = [
    path('properties/', PropertyListCreateView.as_view(), name= 'property-list_create'),
    path('properties/<int:pk>/', PropertyRetieveUpdateDestroyView.as_view, name='property-detail'),
]