from django_filters import rest_framework as filters
from rest_framework import viewsets
from rest_framework.filters import OrderingFilter

from apps.results.api.serializers import ResultSerializer
from apps.results.models import Result


class ResultFilter(filters.FilterSet):
    class Meta:
        model = Result
        fields = [
            'scenario',
            'passed',
        ]


class ResultViewSet(viewsets.ModelViewSet):
    """
    For providing CRUD & Filter
    """
    queryset = Result.objects.all()
    serializer_class = ResultSerializer
    filter_backends = (filters.DjangoFilterBackend, OrderingFilter)
    filter_class = ResultFilter
