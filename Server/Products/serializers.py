from rest_framework import serializers
from .models import Product
from Users.serializers import UserProfileSerializer

class ProductSerializer(serializers.ModelSerializer):

    class Meta:
        model = Product
        fields = ["name", "price", "description", "image"]
        read_only_fields = ('id',)


class ProductUserSerializer(serializers.ModelSerializer):
    seller = UserProfileSerializer(read_only=True)

    # likes_count = serializers.IntegerField(read_only=True)

    class Meta:
        model = Product
        fields = ["id", "seller", "name", "price", "description", "image"]
        read_only_fields = ('id',)