
from django.urls import path
from .airlines import airline_list, flight_list
from rest_framework_simplejwt.views import TokenRefreshView


urlpatterns = [
    path('airline_list/',
         airline_list, name='airline_list'),

    path('flight_list/',
         flight_list, name='create_flight'),

]
