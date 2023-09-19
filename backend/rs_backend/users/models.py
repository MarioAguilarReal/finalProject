from django.db import models
from django.contrib.auth.models import AbstractUser


class User(AbstractUser):
    username = models.CharField(
        max_length=150, 
        unique=True,
        null=False,
        blank=False,
    )
    email = models.EmailField(
        max_length=254,
        unique=True,
        null=False,
        blank=False,
    )
    password = models.CharField(
        max_length=128,
        null=False,
        blank=False,
    )
    first_name = models.CharField(
        max_length=150,
        null=True,
        blank=True,
    )
    last_name = models.CharField(
        max_length=150,
        null=True,
        blank=True,
    )
    phone_number = models.CharField(
        max_length=15,
        null=True,
        blank=True,
    )
    profile_picture = models.ImageField(
        upload_to='profile_pictures',
        null=True,
        blank=True,
    )
    user_type = models.CharField(
        max_length=10,
        choices=(
            ('admin', 'Admin'),
            ('user', 'User'),
        ),
        default='user',
    )
    
