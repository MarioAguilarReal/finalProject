from django.urls import path
from rest_framework.routers import SimpleRouter
from .views import (
    UserViewset
)

router = SimpleRouter()
router.register('users', UserViewset)
urlpatterns = router.urls

urlpatterns += [
]
