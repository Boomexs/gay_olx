from django.urls import path
from .views import ProductPublicGet, ProductPrivatePostView, ProductConcreteView

urlpatterns = [
    path('products/', ProductPublicGet.as_view(), name='item_list'),
    path('products/create', ProductPrivatePostView.as_view(), name='item_list'),
    path('products/{int:_id}', ProductConcreteView.as_view(), name='item_list'),
]
