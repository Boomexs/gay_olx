from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.parsers import JSONParser
from rest_framework.permissions import IsAuthenticated
from .models import Product
from .serializers import ProductSerializer
import json


class ProductGeneralView(APIView):
    permission_classes = []

    def get(self, request):

        # body = json.loads(request.body)
        # print(body)
        """
        Fetches products based on the provided filters. If a productId is specified, only one product will be returned.
        Filters can include:
            - supplierName
            - supplierId
            - hashtagName
            - hashtagId
            - phrase
            - productId (returns a single product if specified)

        Query parameters:
            - offset (optional)
            - amount (optional, 25 by default)
            - supplierName (optional)
            - supplierId (optional)
            - hashtagNames (optional)
            - hashtagIds (optional)
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

        products = Product.objects.all()

        return Response(ProductSerializer(products, many=True).data)
        pass

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
        pass


class ProductSpescificView(APIView):
    permission_classes = [IsAuthenticated]

    def put(self, request, id):
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
        pass

    def delete(self, request, id):
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
        pass
