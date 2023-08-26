from django.urls import path
from .views import (
    PropertyListCreateView, 
    PropertyRetieveUpdateDestroyView, 
    PropertyImageListCreateView
)

urlpatterns = [
    path('properties/', PropertyListCreateView.as_view(), name= 'property-list_create'),
    path('properties/<int:pk>/', PropertyRetieveUpdateDestroyView.as_view(), name='property-detail'),
    path('properties/<int:pk>/images/', PropertyImageListCreateView.as_view(), name='property-image-list_create'),
]