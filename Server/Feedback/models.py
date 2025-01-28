from django.db import models
from django.core.validators import MinValueValidator, MaxValueValidator

# Create your models here.
class Feedback(models.Model):
    user = models.ForeignKey('Users.User', on_delete=models.CASCADE)
    product = models.ForeignKey('Products.Product', on_delete=models.CASCADE)
    rating = models.DecimalField(
        max_digits=3,  # 1 digit for integer part, 1 digit for decimal part
        decimal_places=1,  # 1 decimal place
        validators=[
            MinValueValidator(1),  # rating must be >= 1
            MaxValueValidator(5)   # rating must be <= 5
        ]
    )
    text = models.TextField()
    image = models.ImageField(upload_to='feedback_images/', blank=True)
