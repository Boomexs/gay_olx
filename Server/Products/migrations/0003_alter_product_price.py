# Generated by Django 5.1.5 on 2025-01-28 11:38

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Products', '0002_product_hashtags'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='price',
            field=models.DecimalField(decimal_places=1, max_digits=10, validators=[django.core.validators.MinValueValidator(0)]),
        ),
    ]
