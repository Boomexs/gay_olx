# Generated by Django 5.1.5 on 2025-01-28 11:18

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('Hashtags', '0001_initial'),
        ('Products', '0002_product_hashtags'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='Hashtag_Names',
            new_name='Hashtags',
        ),
    ]
