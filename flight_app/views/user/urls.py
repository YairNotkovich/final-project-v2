

from django.urls import path
from user_view import profile_detail
from rest_framework_simplejwt.views import TokenRefreshView


urlpatterns = [
    path('userprofile/',
         profile_detail, name='profile_detail'),

    path('upload_image/',
         profile_detail, name='profile_detail'),

]
