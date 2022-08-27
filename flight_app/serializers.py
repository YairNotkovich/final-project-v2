from rest_framework.serializers import ModelSerializer
from .models import *
from django.contrib.auth import get_user_model


class FlightsSerializer(ModelSerializer):
    
    class Meta:
        model = Flight
        fields= ['id']
        # fields = '__all__'


class CountriesSerializer(ModelSerializer):
    
    class Meta:
        model = Country
        fields= ['id', 'Name', 'Flag']



class AirportSerializer(ModelSerializer):

    class Meta:
        model = Airport
        fields = '__all__'

class airlineSerializer(ModelSerializer):

    class Meta:
        model = Airline_Company
        fields = '__all__'


class userSerializer(ModelSerializer):

    class Meta:
        model = get_user_model()
        fields = '__all__'


class CustomerSerializer(ModelSerializer):

    class Meta:
        model = Customer
        fields = '__all__'
