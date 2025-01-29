from rest_framework import status
from rest_framework.response import Response
from rest_framework.status import HTTP_201_CREATED, HTTP_400_BAD_REQUEST, HTTP_200_OK, HTTP_401_UNAUTHORIZED, HTTP_204_NO_CONTENT
from rest_framework.views import APIView
from django.views import View
from .models import User
from .serializers import UserProfileSerializer
from rest_framework.authtoken.models import Token
from rest_framework.permissions import AllowAny, IsAuthenticated
from django.db import IntegrityError, transaction
from django.contrib.auth import authenticate
from Feedback.models import Feedback
from .serializers import UserProfileSerializer

import json

class UserInfoView(APIView):
    permission_classes = [AllowAny]
    def get(self, request):
        if idx := request.GET.get('id'):
            if u := User.objects.get(id=idx):
                return Response(UserProfileSerializer(u).data, status=HTTP_200_OK)
            return Response({"error": "User not found"}, status=status.HTTP_404_NOT_FOUND)
        return Response(UserProfileSerializer(request.user).data, status=HTTP_200_OK)

# Create your views here.
class LoginView(APIView):

    permission_classes = [AllowAny]

    def post(self, request):
        # Get credentials from request data
        username = request.data.get('username')
        password = request.data.get('password')

        # Check if credentials are provided
        if not username or not password:
            return Response(
                {"error": "Username and password are required."},
                status=HTTP_400_BAD_REQUEST
            )

        # Authenticate the user
        user = authenticate(username=username, password=password)

        if user is not None:
            # If authentication is successful, generate or retrieve a token
            token, created = Token.objects.get_or_create(user=user)
            return Response(
                {
                    "message": "Login successful.",
                    "Authorization": token.key
                },
                status=HTTP_200_OK
            )
        else:
            # Invalid credentials
            return Response(
                {"error": "Invalid username or password."},
                status=HTTP_401_UNAUTHORIZED
            )

class LogoutView(APIView):
    permission_classes = [IsAuthenticated]
    def post(self, request):
        request.user.auth_token.delete()
        return Response({"messege": "Logged out successfully"}, status=HTTP_204_NO_CONTENT)

class DeleteView(APIView):
    permission_classes = [IsAuthenticated]

    @transaction.atomic
    def delete(self, request):
        deleted_user = User.objects.get(id=2)

        feedbacks = Feedback.objects.filter(user=request.user)
        for feedback in feedbacks:
            feedback.user = deleted_user
            feedback.save()

        request.user.auth_token.delete()
        request.user.delete()

        return Response({"message": "User deleted successfully"}, status=HTTP_204_NO_CONTENT)

class RegisterView(APIView):

    permission_classes = [AllowAny]

    def post(self, request):
        serializer = UserProfileSerializer(data=request.data)
        if serializer.is_valid():
            user = User.objects.create_user(username=serializer.validated_data["username"], password=serializer.validated_data["password"])

            token, created = Token.objects.get_or_create(user=user)
            return Response({"Authorization": token.key}, status=HTTP_201_CREATED)
        return Response({"errors": serializer.errors}, status=HTTP_400_BAD_REQUEST)


