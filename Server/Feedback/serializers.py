from rest_framework.serializers import ModelSerializer
from .models import Feedback
from Users.serializers import UserProfileSerializer

class FeedbackSerializer(ModelSerializer):

    class Meta:
        model = Feedback
        fields = ['rating', 'text', 'image']
