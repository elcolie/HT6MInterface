from rest_framework import viewsets, status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from apps.scenarios.api.serializers import ScenarioSerializer
from apps.scenarios.models import Scenario


class ScenarioViewSet(viewsets.ModelViewSet):
    permission_classes = (IsAuthenticated,)
    queryset = Scenario.objects.all()
    serializer_class = ScenarioSerializer


@api_view(['GET'])
@permission_classes(permission_classes=[])
def test(request):
    data = {
        'results': [
            {'x': 1, 'y': 3},
            {'x': 2, 'y': 4},
            {'x': 3, 'y': 5},
            {'x': 4, 'y': 2},
        ]
    }
    return Response(data=data, status=status.HTTP_200_OK)
