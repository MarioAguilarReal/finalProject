from django.urls import path
<<<<<<< HEAD
from .views import (
    PropertyList,
    PropertyDetail,
    PropertyImageList,
    PropertyImageDetail,
)

urlpatterns = [
    path('properties/', PropertyList.as_view(), name='property_list'),
    path('properties/<int:pk>/', PropertyDetail.as_view(), name='property_detail'),
    path('properties/<int:pk>/images/', PropertyImageList.as_view(), name='property_image_list'),
    path('properties/<int:pk>/images/<int:image_pk>/', PropertyImageDetail.as_view(), name='property_image_detail'),
=======
from .views import PropertyListCreateView, PropertyRetieveUpdateDestroyView, TypeListView

urlpatterns = [
    path('properties/', PropertyListCreateView.as_view(), name= 'property-list_create'),
    path('properties/<int:pk>/', PropertyRetieveUpdateDestroyView.as_view, name='property-detail'),
    path('types/', TypeListView.as_view(), name='type-list'),
>>>>>>> master
]