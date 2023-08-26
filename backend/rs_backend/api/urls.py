from django.urls import path
from .views import PropertyListCreateView, PropertyRetieveUpdateDestroyView, TypeListView

urlpatterns = [
    path('properties/', PropertyListCreateView.as_view(), name= 'property-list_create'),
    path('properties/<int:pk>/', PropertyRetieveUpdateDestroyView.as_view, name='property-detail'),
    path('types/', TypeListView.as_view(), name='type-list'),
]