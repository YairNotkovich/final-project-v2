from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.parsers import JSONParser
from django.contrib.admin.views.decorators import staff_member_required
from django.contrib.auth import get_user_model
from flight_app.serializers import RoutSerializer,AirportSerializer
from django.contrib.auth.decorators import user_passes_test
from rest_framework import status
from collections import defaultdict

import json

rout = RoutSerializer.Meta.model
airport = AirportSerializer.Meta.model

test_airport = airport.objects.get(iata_code__iexact='TLV')

@api_view(['GET', 'POST'])
def view_node(request):
    return Response ({"ok":"test"})
