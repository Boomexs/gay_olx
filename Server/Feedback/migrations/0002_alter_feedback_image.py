# Generated by Django 5.1.5 on 2025-01-28 17:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Feedback', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='feedback',
            name='image',
            field=models.ImageField(blank=True, upload_to='media/'),
        ),
    ]
