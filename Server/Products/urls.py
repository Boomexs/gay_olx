from django.urls import path
from .views import ProductGeneralView

urlpatterns = [
    path('products/', ProductGeneralView.as_view(), name='item_list'),
]
