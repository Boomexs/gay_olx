from django.http import QueryDict
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.parsers import JSONParser
from rest_framework.permissions import IsAuthenticated, AllowAny
from .models import Product
from .serializers import ProductSerializer, ProductUserSerializer
from Hashtags.models import Hashtag
from Users.models import User
from Users.serializers import UserProfileSerializer
from django.db.models import Count
import base64
import json

class ProductPublicGet(APIView):

    permission_classes = [AllowAny]
    def get(self, request):
        """
        Fetches products based on the provided filters. If a productId is specified, only one product will be returned.
        Filters can include:
            - supplierId
            - hashtagNames
            - phrase

        Query parameters:
            - sellerId (optional)
            - hashtagNames (optional)
            - phrase (optional)
            - productId (optional, returns single product if provided)

        Response:
            A list of products with the following structure:
            [
                {
                    "id": "int",
                    "name": "string",
                    "price": "decimal",
                    "image": "string"
                }
            ]
        """

        if p_id := request.GET.get('productId'):
            product = Product.objects.get(pk=p_id)
            serializer = ProductUserSerializer(product)
            return Response(serializer.data, status=status.HTTP_200_OK)

        if u_id := request.GET.get('sellerId'):
            seller = User.objects.get(pk=u_id)
            products = Product.objects.filter(seller=seller)
            serializer = ProductUserSerializer(products, many=True)
            return Response(serializer.data, status=status.HTTP_200_OK)

        phrase = request.GET.get('phrase')
        if phrase :
            print(phrase)
            words = phrase.split(' ')
            hashtags = [word.upper()[1:] for word in words if word.startswith('#')]
            print(hashtags)
            valid_hashtags = Hashtag.objects.filter(name__in=hashtags)
            print(valid_hashtags)
            products = Product.objects.filter(hashtags__in=valid_hashtags) \
                .annotate(num_hashtags=Count('hashtags', distinct=True)) \
                .filter(num_hashtags=len(valid_hashtags))



            serializer = ProductUserSerializer(products, many=True)
            return Response(serializer.data, status=status.HTTP_200_OK)


        products = Product.objects.all()
        serializer = ProductUserSerializer(products, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)


class ProductPrivatePostView(APIView):
    permission_classes = [IsAuthenticated]


    def post(self, request):
        """
        Adds a new product for suppliers. The request must include the token, product details, and hashtags.

        Request body:
            {
                "token": "string",  # Supplier token for authentication
                "name": "string",   # Product name
                "price": "decimal", # Product price
                "image": "string",  # URL or path to product image
                "hashtags": "["string"]" # List of hashtags associated with the product
            }

        Response:
            {
                "message": "Product added successfully."
            }
        """
        print(request.data)
        user = request.user
        if not user.is_authenticated:
            return Response({"message": "User is not authenticated."}, status=status.HTTP_401_UNAUTHORIZED)

        data :QueryDict = request.data

        hashtag_names = data.getlist("hashtags", [])

        hashtags = []
        invalid_hashtags = []
        for name in hashtag_names:
            try:
                hashtag = Hashtag.objects.get(name=name.upper())
                hashtags.append(hashtag)
            except Hashtag.DoesNotExist:
                invalid_hashtags.append(name)

        # Create product serializer
        serializer = ProductSerializer(data=request.data)

        # Ensure the serializer is valid
        if serializer.is_valid():
            # Set the seller field after validation
            product = serializer.save(seller=user)

            # Assign the valid hashtags to the product
            product.hashtags.set(hashtags)

            return Response({"message": f"Product {product.name} added successfully."}, status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class ProductConcreteView(APIView):
    permission_classes = [IsAuthenticated]

    def put(self, request, _id):
        """
        Updates an existing product for suppliers. The request must include the token and updated product details.

        Request body:
            {
                "token": "string",  # Supplier token for authentication
                "name": "string",   # Product name (optional)
                "price": "decimal", # Product price (optional)
                "image": "string"   # Product image URL (optional)
            }

        Response:
            {
                "message": "Product updated successfully."
            }
        """
        return Response({}, status=status.HTTP_403_FORBIDDEN)

    def delete(self, request, _id):
        """
        Deletes a product for suppliers. The request must include the token to authenticate the supplier.

        Request body:
            {
                "token": "string"  # Supplier token for authentication
            }

        Response:
            {
                "message": "Product deleted successfully."
            }
        """

        if not _id:
            return Response({"message": "Product not found."}, status=status.HTTP_404_NOT_FOUND)

        product = Product.objects.get(pk=_id)

        if not product:
            return Response({"message": "Product not found."}, status=status.HTTP_404_NOT_FOUND)

        if product.seller != request.user and not request.user.is_superuser:
            return Response({"message": "No access"}, status=status.HTTP_401_UNAUTHORIZED)

        product.delete()
        return Response({"message": "Product deleted successfully."}, status=status.HTTP_204_NO_CONTENT)
