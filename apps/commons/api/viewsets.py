from django_celery_results.models import TaskResult
from rest_framework import viewsets
from rest_framework.pagination import PageNumberPagination

from apps.commons.api.serializers import TaskResultSerializer


class MyPagination(PageNumberPagination):
    page_size = 10
    page_query_param = 'page_size'
    max_page_size = 1000


class TaskResultViewSet(viewsets.ModelViewSet):
    pagination_class = MyPagination
    permission_classes = ()
    queryset = TaskResult.objects.all()
    serializer_class = TaskResultSerializer
