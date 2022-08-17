
from django.urls import path
from .login_signup import MyTokenObtainPairView, signUp
from .userPerms import get_user_perms
from rest_framework_simplejwt.views import TokenRefreshView


urlpatterns = [
    path('authenticate/',
         MyTokenObtainPairView.as_view(), name='token_obtain_pair'),

    path('authenticate/refresh/',
         TokenRefreshView.as_view(), name='token_refresh'),

     path('signup/',
         signUp, name='SignUp'),

     path('fetch_user_perms/',
         get_user_perms, name='user_perms'),

]
