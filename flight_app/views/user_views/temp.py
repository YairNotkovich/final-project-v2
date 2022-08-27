from django.http import JsonResponse
from rest_framework import permissions
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from django.contrib.auth.models import User
from django.contrib.auth import authenticate
from flight_app.models import Country, Airport
from flight_app.serializers import CountriesSerializer, AirportSerializer

 
# @api_view(['GET'])
# def all_countries(r):
#     countries = CountriesSerializer(Country.objects.all(), many=True)
#     return Response(countries.data)

# @api_view(['GET'])
# def all_airports(r):
#     airports = AirportSerializer(Airport.objects.all(), many=True)
#     return Response(airports.data)

# @api_view(['GET'])
# def all_flights(r):
#     flights = FlightsSerializer(Flight.objects.all(), many=True)
#     return Response( flights) suplier 
