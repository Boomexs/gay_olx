from itertools import product

from django.shortcuts import render
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.views import APIView, Response
from rest_framework.status import HTTP_400_BAD_REQUEST, HTTP_201_CREATED, HTTP_200_OK, HTTP_204_NO_CONTENT, \
    HTTP_401_UNAUTHORIZED
from .serializers import FeedbackSerializer
from .models import Feedback
from Products.models import Product
from django.db import transaction

# Create your views here.
class FeedbackView(APIView):
    def get_permissions(self):
        if self.request.method == "GET":
            return [AllowAny()]  # Use AllowAny() instead of AllowAny
        return [IsAuthenticated()]  # Use IsAuthenticated() instead of IsAuthenticated

    @transaction.atomic
    def post(self, request, _id):
        p :Product = Product.objects.get(id=_id)
        if not p:
            return Response({"error": "Bad id."}, status=HTTP_400_BAD_REQUEST)

        serializer = FeedbackSerializer(data=request.data)
        if serializer.is_valid():
            f :Feedback = serializer.save()
            f.product = p

        return Response({"messege": "Feedback added successfully"}, status=HTTP_201_CREATED)


    def get(self, request, _id):
        p :Product = Product.objects.get(id=_id)
        if not p:
            return Response({"error": "Bad id."}, status=HTTP_400_BAD_REQUEST)

        feedback :Feedback = Feedback.objects.filter(product=p)

        serializer = FeedbackSerializer(feedback, many=True)
        return Response(serializer.data, status=HTTP_200_OK)


    def put(self, request, _id):
        feedback :Feedback = Feedback.objects.get(id=_id)
        if not feedback:
            return Response({"error": "Bad id."}, status=HTTP_400_BAD_REQUEST)

        if feedback.user != request.user:
            return Response({"error": "Skill issue XD"}, status=HTTP_401_UNAUTHORIZED)

        rating = request.data.get('rating', None)
        text = request.data.get('text', None)
        if rating:
            feedback.rating = rating

        if text:
            feedback.text = text

        feedback.save()
        return Response({"messege": "Feedback updated successfully"}, status=HTTP_204_NO_CONTENT)

    def delete(self, request, _id):
        feedback :Feedback = Feedback.objects.get(id=_id)
        if not feedback:
            return Response({"error": "Bad id."}, status=HTTP_400_BAD_REQUEST)

        if feedback.user != request.user and not request.user.is_superuser:
            return Response(
                {
                    "01 skill issue XD": "—————————————No access?——————————————",
                    "02 skill issue XD": "⠀⣞⢽⢪⢣⢣⢣⢫⡺⡵⣝⡮⣗⢷⢽⢽⢽⣮⡷⡽⣜⣜⢮⢺⣜⢷⢽⢝⡽⣝",
                    "03 skill issue XD": "⠸⡸⠜⠕⠕⠁⢁⢇⢏⢽⢺⣪⡳⡝⣎⣏⢯⢞⡿⣟⣷⣳⢯⡷⣽⢽⢯⣳⣫⠇",
                    "04 skill issue XD": "⠀⠀⢀⢀⢄⢬⢪⡪⡎⣆⡈⠚⠜⠕⠇⠗⠝⢕⢯⢫⣞⣯⣿⣻⡽⣏⢗⣗⠏⠀",
                    "05 skill issue XD": "⠀⠪⡪⡪⣪⢪⢺⢸⢢⢓⢆⢤⢀⠀⠀⠀⠀⠈⢊⢞⡾⣿⡯⣏⢮⠷⠁⠀⠀⠀",
                    "06 skill issue XD": "⠀⠀⠀⠈⠊⠆⡃⠕⢕⢇⢇⢇⢇⢇⢏⢎⢎⢆⢄⠀⢑⣽⣿⢝⠲⠉⠀⠀⠀⠀",
                    "07 skill issue XD": "⠀⠀⠀⠀⠀⡿⠂⠠⠀⡇⢇⠕⢈⣀⠀⠁⠡⠣⡣⡫⣂⣿⠯⢪⠰⠂⠀⠀⠀⠀",
                    "08 skill issue XD": "⠀⠀⠀⠀⡦⡙⡂⢀⢤⢣⠣⡈⣾⡃⠠⠄⠀⡄⢱⣌⣶⢏⢊⠂⠀⠀⠀⠀⠀⠀",
                    "09 skill issue XD": "⠀⠀⠀⠀⢝⡲⣜⡮⡏⢎⢌⢂⠙⠢⠐⢀⢘⢵⣽⣿⡿⠁⠁⠀⠀⠀⠀⠀⠀⠀",
                    "10 skill issue XD": "⠀⠀⠀⠀⠨⣺⡺⡕⡕⡱⡑⡆⡕⡅⡕⡜⡼⢽⡻⠏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀",
                    "11 skill issue XD": "⠀⠀⠀⠀⣼⣳⣫⣾⣵⣗⡵⡱⡡⢣⢑⢕⢜⢕⡝⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀",
                    "12 skill issue XD": "⠀⠀⠀⣴⣿⣾⣿⣿⣿⡿⡽⡑⢌⠪⡢⡣⣣⡟⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀",
                    "13 skill issue XD": "⠀⠀⠀⡟⡾⣿⢿⢿⢵⣽⣾⣼⣘⢸⢸⣞⡟⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀",
                    "14 skill issue XD": "⠀⠀⠀⠀⠁⠇⠡⠩⡫⢿⣝⡻⡮⣒⢽⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀",
                    "15 skill issue XD": "—————————————————————————————————————",
            }, status=HTTP_401_UNAUTHORIZED)

        feedback.delete()
        return Response({"messege": "Feedback deleted successfully"}, status=HTTP_204_NO_CONTENT)