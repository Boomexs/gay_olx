from django.contrib.auth.models import AbstractUser
from django.db import models

# Create your models here.
class User(AbstractUser):
    bio = models.TextField(max_length=500, blank=True)
    pfp = models.ImageField(default='doomer_boy.jpg', upload_to='media/')
    is_verified = models.BooleanField(default=False)
    pronouns = models.TextField(blank=True)

    favourites = models.ManyToManyField('Products.Product', blank=True, related_name='favorited_by')

    def __str__(self):
        return self.username
