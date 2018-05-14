from django.contrib.auth.models import User
from django.test import TestCase
from rest_framework import status
from rest_framework.reverse import reverse
from rest_framework.test import APIClient

from apps.control_params.models import ControlParameter
from apps.heating_params.models import HeatingParameter
from apps.plasma_params.models import PlasmaParameter
from apps.scenarios.models import Scenario
from apps.transport_params.models import TransportParameter


class TestScenario(TestCase):

    def setUp(self):
        self.admin_user = User.objects.create_superuser('admin', 'sarit@magicboxasia.com', 'superd00per5ecret')
        self.client = APIClient()

    def test_create_scenario(self):
        """Test by non supply the key"""
        url = reverse('apis:scenario-list')
        self.client.force_login(self.admin_user)
        res = self.client.post(url, payload={}, format='json')
        assert 1 == Scenario.objects.count()
        assert 1 == PlasmaParameter.objects.count()
        assert 1 == TransportParameter.objects.count()
        assert 1 == ControlParameter.objects.count()
        assert 1 == HeatingParameter.objects.count()
        assert self.admin_user == Scenario.objects.first().created_by
        assert status.HTTP_201_CREATED == res.status_code

    def test_create_scenario_partial_supply(self):
        """Partially supplies the value"""
        payload = {
            'device_params': {
                'major_radius': 0.7,
            }
        }
        url = reverse('apis:scenario-list')
        self.client.force_login(self.admin_user)
        res = self.client.post(url, payload=payload, format='json')
        scenario = Scenario.objects.first()
        assert 0.7 == scenario.device_params.major_radius

        assert status.HTTP_201_CREATED == res.status_code
