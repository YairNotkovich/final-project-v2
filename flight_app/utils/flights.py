from flight_app.serializers import RoutSerializer, AirportSerializer, FlightSerializer
from flight_app.models import Airline_Company

import random

from geopy import distance as D
from datetime import datetime, timedelta


rout = RoutSerializer.Meta.model
airport = AirportSerializer.Meta.model
flights_obj = FlightSerializer.Meta.model


# for Demo purpose if not matching flights
# it will generate flights according to request
def generateFlights(origin, destination, depart, flights=15, airline=None):

    i = 0
    origin_lat_lon = (origin.lat_decimal, origin.lon_decimal)
    dest_lat_lon = (destination.lat_decimal,
                    destination.lon_decimal)
    distance = int(D.geodesic(origin_lat_lon, dest_lat_lon).km)
    while i < flights:
       
        if not airline:
            airline = Airline_Company.objects.get(id=random.randint(1, 942))
        if distance > 500:
            range = random.randrange(distance, distance+int(distance*.2))
        flights_obj.objects.create(
            Airline_Company_Id=airline,
            Departure_airport_id=origin,
            Arrival_airport_id=destination,
            Flight_Number=f'{airline.Code}{destination.id}{i}',
            flight_range=range,
            Departure_time=depart
        )
        i += 1
