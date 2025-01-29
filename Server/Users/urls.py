from django.urls import path
from .views import LoginView, RegisterView, LogoutView, DeleteView, UserInfoView

urlpatterns = [
    path('login/', LoginView.as_view(), name='login'),
    path('register/', RegisterView.as_view(), name='register'),
    path('logout/', LogoutView.as_view(), name='logout'),
    path('delete/', DeleteView.as_view(), name='delete'),
    path('userInfo/', UserInfoView.as_view(), name='info'),
]