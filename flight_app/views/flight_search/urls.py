from django.urls import path
from .test import view_node
from rest_framework_simplejwt.views import TokenRefreshView


urlpatterns = [
    path('test/',
         view_node, name='test'),

   

]
