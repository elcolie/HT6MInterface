import copy

from django.test import TestCase

from apps.commons.constants import CONTROL_PARAMS
from apps.control_params.api.serializers import ControlParameterSerializer


class TestControlParameter(TestCase):
    def setUp(self):
        pass

    def test_blank_initial_data(self):
        """If no supply then serializer pick default value"""
        serializer = ControlParameterSerializer(data={})
        serializer.is_valid()
        instance = serializer.save()
        for key in CONTROL_PARAMS.keys():
            assert CONTROL_PARAMS[key] == getattr(instance, key)

    def test_partial_initial_data(self):
        serializer = ControlParameterSerializer(data={
            'timestep': 0.7,
        })
        assert True is serializer.is_valid()
        expected_result = copy.deepcopy(CONTROL_PARAMS)
        expected_result['timestep'] = 0.7
        instance = serializer.save()
        for key in expected_result.keys():
            assert expected_result[key] == getattr(instance, key)
