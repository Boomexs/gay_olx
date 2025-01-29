from django.db import models
# from Products.models import Product

# Create your models here.
class Hashtag(models.Model):
    name = models.CharField(max_length=100, unique=True)

    def __str__(self):
        return self.name

    def save(self, *args, **kwargs):
        # Automatically convert the text field value to uppercase
        self.name = self.name.upper()
        super().save(*args, **kwargs)