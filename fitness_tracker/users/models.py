from django.contrib.auth.models import AbstractUser
from djongo import models

class User(AbstractUser):
    is_admin = models.BooleanField(default=False)
    # Add more fields as needed 