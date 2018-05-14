from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated

from apps.scenarios.api.serializers import ScenarioSerializer
from apps.scenarios.models import Scenario


class ScenarioViewSet(viewsets.ModelViewSet):
    permission_classes = (IsAuthenticated,)
    queryset = Scenario.objects.all()
    serializer_class = ScenarioSerializer
