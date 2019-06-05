import logging

from rest_framework import status
from rest_framework import viewsets
from rest_framework.decorators import api_view
from rest_framework.decorators import permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from apps.commons.utils import MockRequest
from apps.scenarios.api.serializers import ScenarioSerializer
from apps.scenarios.models import Scenario
from celery_ht6m import fortran_simulate

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
    from model_mommy import mommy
    scenario = mommy.make(Scenario, created_by=request.user)
    scenario_dict = {
        'scenario': scenario.id,
    }
    fortran_simulate.delay(scenario_dict)
    return Response(data=request.data, status=status.HTTP_200_OK)


@api_view(['POST'])
@permission_classes(permission_classes=[IsAuthenticated])
def intermediate(request):
    """
    For Intermediate Control Room
    :param request:
    :return:
    """
    logger.info(f"INTERMEDIATE : {request.data}")
    # Log the given parameters in the Django model here
    serializer = ScenarioSerializer(data=request.data, context={'request': MockRequest(request.user)})
    if serializer.is_valid():
        scenario = serializer.save()
        scenario_dict = {
            'scenario': scenario.id,
        }
        # Dispatch job to worker here
        fortran_simulate.delay(scenario_dict)
        return Response(data=request.data, status=status.HTTP_201_CREATED)
    else:
        return Response(data=serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['POST'])
@permission_classes(permission_classes=())
def test_add(request):
    from celery_ht6m import debug_mine
    debug_mine.delay(10,1)
    return Response(data="Good message", status=status.HTTP_200_OK)
