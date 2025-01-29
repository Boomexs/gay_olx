from rest_framework import serializers
from .models import User

class UserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['username','first_name', 'last_name', 'email', 'bio', 'pfp', 'is_verified', 'pronouns']

    def validate_email(self, value):
        if "@" not in value:
            raise serializers.ValidationError("Invalid email format")
        return value
