from rest_framework import routers

from apps.scenarios.api.viewsets import ScenarioViewSet

app_name = 'apis'
router = routers.SimpleRouter()
router.register(r'scenarios', ScenarioViewSet, base_name='scenario')
urlpatterns = router.urls
