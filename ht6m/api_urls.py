from rest_framework import routers

from apps.advanced_cases.api.viewsets import AdvancedCaseViewSet
from apps.scenarios.api.viewsets import ScenarioViewSet

app_name = 'apis'
router = routers.DefaultRouter()
router.register(r'scenarios', ScenarioViewSet, base_name='scenario')
router.register(r'advanced-cases', AdvancedCaseViewSet, base_name='advanced_case')
urlpatterns = router.urls
