from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response


@api_view(['GET'])
def get_username(request):
    return Response(data={'username': request.user.username}, status=status.HTTP_200_OK)
