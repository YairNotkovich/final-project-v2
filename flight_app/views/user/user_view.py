

from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.parsers import JSONParser
from django.contrib.auth import get_user_model
from flight_app.serializers import UserProfileSerializer,userSerializer
from rest_framework import status

user_model = userSerializer.Meta.model
profile_model = UserProfileSerializer.Meta.model


@api_view(['GET', 'PUT'])
@permission_classes([IsAuthenticated])
def profile_detail(request):
    try: 
        user = user_model.objects.get(id=request.user.id)
        profile = user.userprofile
        Response(status=status.HTTP_302_FOUND)
    except user_model.DoesNotExist: 
        return Response({'message': f'The {profile._meta.verbose_name} does not exist'}, status=status.HTTP_404_NOT_FOUND) 
 
    if request.method == 'GET':
        # return combined serialized data from user and user profile
        serialized_user = userSerializer(user).data
        serialized_profile = UserProfileSerializer(profile).data
        serialized_profile.update(serialized_user)
        return Response(serialized_profile, status=status.HTTP_200_OK)

    elif request.method == 'PUT': 
        data = request.data
        print(profile.Photo)
        updated_profile = profile.Photo = request.data['Photo']
        if updated_profile:
            profile.save()
            serialized_profile = UserProfileSerializer(profile)
            return Response(serialized_profile.data, status=status.HTTP_202_ACCEPTED) 

        return Response( status=status.HTTP_400_BAD_REQUEST)

# @user_passes_test(lambda u: u.is_superuser)


