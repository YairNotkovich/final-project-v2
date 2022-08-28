from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.parsers import JSONParser
from django.contrib.admin.views.decorators import staff_member_required
from django.contrib.auth import get_user_model
from flight_app.models import User, Airline_Company, User_Role
from flight_app.serializers import airlineSerializer
from django.contrib.auth.decorators import user_passes_test
from rest_framework import status
import json


modelSerializer = airlineSerializer
model = modelSerializer.Meta.model


@api_view(['GET'])
def airline_list(request):

    # get all objects in the model airline_companies
    result = model.objects.all()
    serialized = modelSerializer(result, many=True)
    return Response(serialized.data)
