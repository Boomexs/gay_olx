from rest_framework import serializers
from .models import Product

class ProductSerializer(serializers.ModelSerializer):

    class Meta:
        model = Product
        fields = ["name", "price", "description", "image"]
        read_only_fields = ('id',)
