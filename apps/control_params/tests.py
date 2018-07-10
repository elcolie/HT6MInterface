from django.test import TestCase

from apps.control_params.api.serializers import ControlParameterSerializer


class TestControlParameter(TestCase):
    def setUp(self):
        pass

    def test_blank_initial_data(self):
        """If no supply then serializer will be stuck at `heating_params`"""
        serializer = ControlParameterSerializer(data={})
        assert False is serializer.is_valid()
