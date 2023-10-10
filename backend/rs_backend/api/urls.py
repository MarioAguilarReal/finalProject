from django.urls import path
from django.conf import settings
from django.conf.urls.static import static
from rest_framework.routers import SimpleRouter
from .views import (
    PropertyViewset,
    ImageViewset,

)

router = SimpleRouter()
router.register('properties', PropertyViewset)
router.register('images', ImageViewset)
urlpatterns = router.urls

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

