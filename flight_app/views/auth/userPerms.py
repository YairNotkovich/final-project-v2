
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from flight_app.utils.authUtils import get_user_groups_id
from rest_framework import status
from flight_app.models import UserProfile
import json

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_user_perms(request):

    try: 
        userProfile = UserProfile.objects.get(id = request.user.id)
        Response(status=status.HTTP_302_FOUND)
    except UserProfile.DoesNotExist: 
        return Response({'message': f'The {model.verbose_name} does not exist'}, status=status.HTTP_404_NOT_FOUND)
        
    userRole = userProfile.Role.id
    perm_groups = get_user_groups_id(request.user)
    result = {
        'user_role': userRole,
        'user_perms':perm_groups
    }
    return Response(json.dumps(result))

