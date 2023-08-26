from django.contrib import admin

from .models import (
    Property,
    Image,
    Type,
    )

admin.site.register(Property)
admin.site.register(Image)
admin.site.register(Type)