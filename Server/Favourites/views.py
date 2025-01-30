
from rest_framework.response import Response
from rest_framework.status import HTTP_201_CREATED, HTTP_400_BAD_REQUEST, HTTP_200_OK, HTTP_401_UNAUTHORIZED, HTTP_204_NO_CONTENT
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from Products.serializers import ProductUserSerializer
from Products.models import Product


# Create your views here.
class FavouritesView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        if id := request.data.get('productId'):
            product = Product.objects.get(id=id)
            if product in request.user.favourites.all():
                print("uwu")
                request.user.favourites.remove(id)
                return Response({"messege": "item removed from the favorites"}, status=HTTP_204_NO_CONTENT)
            else:
                print("")
                request.user.favourites.add(id)
                return Response({"messege": "Item added to favoprites"},status=HTTP_201_CREATED)
        else:
            return Response({"messege": "skill issue"}, status=HTTP_400_BAD_REQUEST)


    def get(self, request):
        favourites = request.user.favourites.all()
        serializer = ProductUserSerializer(favourites, many=True)
        return Response({'favourites': serializer.data})