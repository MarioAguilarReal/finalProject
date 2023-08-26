from django.urls import path
from .views import (
    PropertyList,
    PropertyDetail,
    PropertyImageList,
    PropertyImageDetail,
    TypeList,
    TypeDetail,
)

urlpatterns = [
    path('properties/', PropertyList.as_view(), name='property_list'),
    path('properties/<int:pk>/', PropertyDetail.as_view(), name='property_detail'),
    path('properties/<int:pk>/images/', PropertyImageList.as_view(), name='property_image_list'),
    path('properties/<int:pk>/images/<int:image_pk>/', PropertyImageDetail.as_view(), name='property_image_detail'),
    path('types/', TypeList.as_view(), name='type_list'),
    path('types/<int:pk>/', TypeDetail.as_view(), name='type_detail'),
]