

from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.parsers import JSONParser
from django.contrib.auth import get_user_model
from flight_app.serializers import UserProfileSerializer,userSerializer
from rest_framework import status




@api_view(['GET', 'PUT', 'DELETE'])
@permission_classes([IsAuthenticated])
def profile_detail(request, id):
    try: 
        obj = model.objects.get(id=id)
        Response(status=status.HTTP_302_FOUND)
    except model.DoesNotExist: 
        return Response({'message': f'The {model.verbose_name} does not exist'}, status=status.HTTP_404_NOT_FOUND) 
 
    if request.method == 'GET':
        return Response(modelSerializer(obj).data, status=status.HTTP_302_FOUND)

    elif request.method == 'PUT': 
        obj_data = JSONParser().parse(request) 
        obj_serializer = modelSerializer(obj, data=obj_data) 
        if obj_serializer.is_valid(): 
            obj_serializer.save() 
            return Response(obj_serializer.data) 
        return Response(obj_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        obj.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    return Response(status=status.HTTP_100_CONTINUE)
# @user_passes_test(lambda u: u.is_superuser)


