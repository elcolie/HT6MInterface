from rest_framework import routers

from apps.advanced_cases.api.viewsets import AdvancedCaseViewSet
from apps.commons.api.viewsets import TaskResultViewSet
from apps.results.api.viewsets import ResultViewSet
from apps.scenarios.api.viewsets import ScenarioViewSet

app_name = 'apis'
router = routers.DefaultRouter()
router.register(r'scenarios', ScenarioViewSet, base_name='scenario')
router.register(r'advanced-cases', AdvancedCaseViewSet, base_name='advanced_case')
router.register(r'results', ResultViewSet, base_name='result')
router.register(r'tasks', TaskResultViewSet, base_name='tasks')
urlpatterns = router.urls
