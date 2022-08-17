
from venv import create
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework.decorators import api_view
from rest_framework import status
from rest_framework.response import Response
from django.contrib.auth import get_user_model
import json

class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)

        # Add custom claims
        token['email'] = user.email
        token['username'] = user.username
        # ...

        return token


class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer


@api_view(['POST'])
def signUp(request):
    model = get_user_model()
    user_credentials = request.data
    try:
        model.objects.create_user(
            email = user_credentials['email'],
            password = user_credentials['password'],
            username = user_credentials['username'])
        return Response(data ={"success"} ,status=status.HTTP_201_CREATED)
    except Exception as e:
        return Response(data ={f"exception:{e}"},status=status.HTTP_409_CONFLICT)
