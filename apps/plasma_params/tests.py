from django.test import TestCase

from apps.plasma_params.api.serializers import ElectronSerializer, DensityAndTemperatureSerializer
from apps.plasma_params.models import Electron, DensityAndTemperature, Hydrogen, Deuterium, Tritium


class TestPlasmaParam(TestCase):
    def setUp(self):
        pass

    def test_electron_serializer(self):
        data = {
            'density_of_center': 1,
            'density_of_edge': 2,
            'temp_at_center': 3,
            'temp_at_edge': 4,
        }
        serializer = ElectronSerializer(data=data)
        is_valid = serializer.is_valid()
        serializer.save()
        assert True is is_valid
        assert 1 == Electron.objects.count()

    def test_density_and_temperature_serializer(self):
        """electron & hydrogen"""
        data = {
            'electron': {
                'density_of_center': 1,
                'density_of_edge': 2,
                'temp_at_center': 3,
                'temp_at_edge': 4,
            },
            'hydrogen': {
                'density_of_center': 5,
                'density_of_edge': 6,
                'temp_at_center': 7,
                'temp_at_edge': 8,
            }
        }
        serializer = DensityAndTemperatureSerializer(data=data)
        is_valid = serializer.is_valid()
        serializer.save()
        assert True is is_valid
        assert 1 == DensityAndTemperature.objects.count()
        assert 1 == Electron.objects.count()
        assert 1 == Hydrogen.objects.count()

    def test_electron_hydrogen_deuterium(self):
        data = {
            'electron': {
                'density_of_center': 1,
                'density_of_edge': 2,
                'temp_at_center': 3,
                'temp_at_edge': 4,
            },
            'hydrogen': {
                'density_of_center': 5,
                'density_of_edge': 6,
                'temp_at_center': 7,
                'temp_at_edge': 8,
            },
            'deuterium': {
                'density_of_center': 5,
                'density_of_edge': 6,
                'temp_at_center': 7,
                'temp_at_edge': 8,
            }
        }
        serializer = DensityAndTemperatureSerializer(data=data)
        is_valid = serializer.is_valid()
        serializer.save()
        assert True is is_valid
        assert 1 == DensityAndTemperature.objects.count()
        assert 1 == Electron.objects.count()
        assert 1 == Hydrogen.objects.count()
        assert 1 == Deuterium.objects.count()

    def test_gang_of_four(self):
        data = {
            'electron': {
                'density_of_center': 1,
                'density_of_edge': 2,
                'temp_at_center': 3,
                'temp_at_edge': 4,
            },
            'hydrogen': {
                'density_of_center': 5,
                'density_of_edge': 6,
                'temp_at_center': 7,
                'temp_at_edge': 8,
            },
            'deuterium': {
                'density_of_center': 5,
                'density_of_edge': 6,
                'temp_at_center': 7,
                'temp_at_edge': 8,
            },
            'tritium': {
                'density_of_center': 9,
                'density_of_edge': 10,
                'temp_at_center': 11,
                'temp_at_edge': 12,
            }
        }
        serializer = DensityAndTemperatureSerializer(data=data)
        is_valid = serializer.is_valid()
        serializer.save()
        assert True is is_valid
        assert 1 == DensityAndTemperature.objects.count()
        assert 1 == Electron.objects.count()
        assert 1 == Hydrogen.objects.count()
        assert 1 == Deuterium.objects.count()
        assert 1 == Tritium.objects.count()
