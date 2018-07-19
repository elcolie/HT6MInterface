import copy

from django.contrib.auth.models import User
from django.test import TestCase
from rest_framework import status
from rest_framework.reverse import reverse
from rest_framework.test import APIClient

from apps.commons.constants import DEVICE_PARAMS
from apps.control_params.models import ControlParameter
from apps.device_params.models import DeviceParameter
from apps.heating_params.models import HeatingParameter
from apps.plasma_params.models import PlasmaParameter
from apps.scenarios.models import Scenario
from apps.transport_params.models import TransportParameter


class TestScenario(TestCase):

    def setUp(self):
        self.admin_user = User.objects.create_superuser('admin', 'sarit@magicboxasia.com', 'superd00per5ecret')
        self.client = APIClient()
        self.perfect_payload = {
            'device_params': {
                'machine': 'HT-66M',
                'major_radius': 0.38,
                'minor_radius': 0.4,
                'triangularity': 0,
                'ellipticity': 2,
                'plasma_current': 0.05,
                'magnetic_field': 2.0,
            },
            'plasma_params': {
                'nsmax': 3,
                'density_eqn': False,
            },
            'transport_params': {
                'transport_model': 'CDBM05',
                'resistivity': "Hinton and Hazeltine's model",
                'particle_diffusion': "Model01",
                'heat_pinch': "Pinch01",
                'bootstrap_current': "Model01",
                'neoclassical': "Model01",
            },
            'control_params': {
                'no_break_point': 2,
                'max_run_time': 3,
                'heating_params': [
                    {
                        'break_point_number': 2,
                        'breakpoint_time': 0,
                        'timestep': 0.01,

                        'particle_species': "H",
                        'rate_of_particle_source': 0,
                        'radial_position': 0,
                        'radial_width': 0.5,

                        'nbi_power': 0,
                        'nbi_radial_position': 0,
                        'nbi_radial_width': 0.5,
                        'icrf_power': 0,
                        'icrf_radial': 0,
                        'icrf_radial_width': 0.5,
                    },
                    {
                        'break_point_number': 2,
                        'breakpoint_time': 0,
                        'timestep': 0.01,

                        'particle_species': "H",
                        'rate_of_particle_source': 0,
                        'radial_position': 0,
                        'radial_width': 0.5,

                        'nbi_power': 0,
                        'nbi_radial_position': 0,
                        'nbi_radial_width': 0.5,
                        'icrf_power': 0,
                        'icrf_radial': 0,
                        'icrf_radial_width': 0.5,
                    }
                ]
            },
        }

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

    def test_create_intermediate(self):
        url = reverse('intermediate')
        self.client.force_authenticate(user=self.admin_user)
        res = self.client.post(url, data=self.perfect_payload, format='json')
        assert status.HTTP_201_CREATED == res.status_code
        assert 1 == DeviceParameter.objects.count()
        assert 1 == PlasmaParameter.objects.count()
        assert 1 == TransportParameter.objects.count()
        assert 1 == ControlParameter.objects.count()
        assert 2 == HeatingParameter.objects.count()
