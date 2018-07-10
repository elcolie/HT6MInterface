import copy

from django.contrib.auth.models import User
from django.test import TestCase
from rest_framework import status
from rest_framework.reverse import reverse
from rest_framework.test import APIClient

from apps.commons.constants import DEVICE_PARAMS
from apps.scenarios.models import Scenario


class TestScenario(TestCase):

    def setUp(self):
        self.admin_user = User.objects.create_superuser('admin', 'sarit@magicboxasia.com', 'superd00per5ecret')
        self.client = APIClient()

    def test_create_scenario(self):
        """Test by non supply the key"""
        url = reverse('apis:scenario-list')
        payload = {
            'device_params': {},
            'plasma_params': {},
            'transport_params': {},
            'control_params': {},
            'heating_params': [{}, {}],
        }
        self.client.force_authenticate(user=self.admin_user)
        res = self.client.post(url, data=payload, format='json')
        assert status.HTTP_400_BAD_REQUEST == res.status_code

    def test_create_scenario_partial_supply_partial_device_params(self):
        payload = {
            'device_params': {
                'major_radius': 0.9,
                'minor_radius': 0.6,
            },
            'plasma_params': {},
            'transport_params': {},
            'control_params': {},
            'heating_params': [{}],
        }
        url = reverse('apis:scenario-list')
        self.client.force_authenticate(user=self.admin_user)
        res = self.client.post(url, payload, format='json')
        scenario = Scenario.objects.first()
        expected_result = copy.deepcopy(DEVICE_PARAMS)
        expected_result['major_radius'] = 0.9
        expected_result['minor_radius'] = 0.6
        assert status.HTTP_400_BAD_REQUEST == res.status_code

    def test_create_scenario_partial_supply_full_device_params(self):
        """Partially supplies the value"""
        payload = {
            'device_params': {
                'major_radius': 0.9,
                'minor_radius': 0.6,
                'triangularity': 0,
                'ellipticity': 1,
                'plasma_current': 0.04,
                'magnetic_field': 1.5,
            },
            'plasma_params': {},
            'transport_params': {},
            'control_params': {},
            'heating_params': [{}],
        }
        url = reverse('apis:scenario-list')
        self.client.force_authenticate(user=self.admin_user)
        res = self.client.post(url, payload, format='json')
        assert status.HTTP_400_BAD_REQUEST == res.status_code

    def test_basic_anonymous(self):
        url = reverse('basic')
        res = self.client.post(url, {'hello': 'world'}, format='json')
        assert status.HTTP_401_UNAUTHORIZED == res.status_code

    def test_basic(self):
        url = reverse('basic')
        self.client.force_authenticate(user=self.admin_user)
        res = self.client.post(url, {'hello': 'world'}, format='json')
        assert status.HTTP_200_OK == res.status_code
