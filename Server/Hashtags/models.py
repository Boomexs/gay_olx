from django.db import models
# from Products.models import Product

# Create your models here.
class Hashtag(models.Model):
    name = models.CharField(max_length=100, unique=True)

    def __str__(self):
        return self.name
