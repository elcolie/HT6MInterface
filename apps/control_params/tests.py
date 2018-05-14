import copy

from django.test import TestCase

from apps.control_params.api.serializers import ControlParameterSerializer
from apps.commons.constants import CONTROL_PARAMS


class TestControlParameter(TestCase):
    def setUp(self):
        pass

    def test_blank_initial_data(self):
        """If no supply then serializer pick default value"""
        serializer = ControlParameterSerializer(data={})
        assert True is serializer.is_valid()
        assert CONTROL_PARAMS == serializer.validated_data

    def test_partial_initial_data(self):
        serializer = ControlParameterSerializer(data={
            'timestep': 0.7,
        })
        assert True is serializer.is_valid()
        expected_result = copy.deepcopy(CONTROL_PARAMS)
        expected_result['timestep'] = 0.7
        assert expected_result == serializer.validated_data
