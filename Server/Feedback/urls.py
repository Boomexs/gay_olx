from django.urls import path
from .views import FeedbackView

urlpatterns = [
    path('feedback/<int:_id>', FeedbackView.as_view(), name='feedback'),
]