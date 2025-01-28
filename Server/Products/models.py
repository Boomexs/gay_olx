from django.db import models
from django.core.validators import MinValueValidator
# Create your models here.

class Product(models.Model):
    name = models.CharField(max_length=100)
    price = models.DecimalField(
        max_digits=10,
        decimal_places=1,  # 1 decimal place
        validators=[
            MinValueValidator(0),  # Price must be >= 0
        ]
    )
    description = models.TextField()
    image = models.ImageField(upload_to='media/')
    seller = models.ForeignKey('Users.User', on_delete=models.CASCADE)
    hashtags = models.ManyToManyField('Hashtags.Hashtag')

    def __str__(self):
        return self.name