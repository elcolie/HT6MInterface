from django.test import TestCase

from apps.plasma_params.api.serializers import ElectronSerializer
from apps.plasma_params.models import Electron


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
