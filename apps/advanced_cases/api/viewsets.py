from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated

from apps.advanced_cases.api.serializers import AdvancedCaseSerializer
from apps.advanced_cases.models import AdvancedCase


class AdvancedCaseViewSet(viewsets.ModelViewSet):
    permission_classes = (IsAuthenticated,)
    queryset = AdvancedCase.objects.all()
    serializer_class = AdvancedCaseSerializer
