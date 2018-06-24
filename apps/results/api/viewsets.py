from rest_framework import viewsets

from apps.results.api.serializers import ResultSerializer
from apps.results.models import Result


class ResultViewSet(viewsets.ModelViewSet):
    queryset = Result.objects.all()
    serializer_class = ResultSerializer
