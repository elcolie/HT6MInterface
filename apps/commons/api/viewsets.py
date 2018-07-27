from django_celery_results.models import TaskResult
from rest_framework import viewsets

from apps.commons.api.serializers import TaskResultSerializer


class TaskResultViewSet(viewsets.ModelViewSet):
    queryset = TaskResult.objects.all()
    serializer_class = TaskResultSerializer
