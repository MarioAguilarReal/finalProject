from django.contrib import admin

from .models import (
    Property,
    Image
    )

admin.site.register(Property)
admin.site.register(Image)