
from rest_framework.response import Response
from rest_framework.status import HTTP_201_CREATED, HTTP_400_BAD_REQUEST, HTTP_200_OK, HTTP_401_UNAUTHORIZED, HTTP_204_NO_CONTENT
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from Products.serializers import ProductSerializer

# Create your views here.
class FavouritesView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        if id := request.data.get('productId', None):
            if id in request.user.favourites.all():
                request.user.favourites.remove(id)
                return Response(status=HTTP_201_CREATED)
            else:
                request.user.favourites.add(id)
                return Response(status=HTTP_204_NO_CONTENT)
        else:
            return Response(status=HTTP_400_BAD_REQUEST)


    def get(self, request):
        favourites = request.user.favourites.all()
        serializer = ProductSerializer(favourites, many=True)
        return Response({'favourites': serializer.data})