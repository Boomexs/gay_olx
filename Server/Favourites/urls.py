from django.urls import path
from .views import FavouritesView

urlpatterns = [
    path('favourites/', FavouritesView.as_view(), name='favourites'),
]