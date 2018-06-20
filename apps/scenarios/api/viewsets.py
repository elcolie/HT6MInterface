import logging
from rest_framework import status
from rest_framework import viewsets
from rest_framework.decorators import api_view
from rest_framework.decorators import permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from apps.scenarios.api.serializers import ScenarioSerializer
from apps.scenarios.models import Scenario
from ht6m.celery import basic_simulate

logger = logging.getLogger('django')

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


@api_view(['GET'])
@permission_classes(permission_classes=[])
def time_series(request):
    with open('Visualization_Sarit/inHT6Ms302/TimeRad2D_rt1.txt', 'r') as file:
        read_data = file.read()
        tmp = read_data.split('\n')
        var_name = tmp[0].lstrip()
        nr_max = int(tmp[1].split(' ')[-1])
        nt_max = int(tmp[2].split(' ')[-1])
        coords = tmp[3].lstrip().split('  ')
        times = tmp[4].lstrip().split('  ')
        values = tmp[6].lstrip().split('  ')
    file.close()
    data = {
        'var_name': var_name,
        'nr_max': nr_max,
        'nt_max': nt_max,
        'coords': coords,
        'times': times,
        'values': values,
    }
    return Response(data=data, status=status.HTTP_200_OK)


@api_view(['POST'])
@permission_classes(permission_classes=[IsAuthenticated])
def basic(request):
    """
    For Basic Control Room
    :param request:
    :return:
    """
    logger.info(f"BASIC : {request.data}")
    basic_simulate.delay(request.data)
    return Response(data=request.data, status=status.HTTP_200_OK)
