from django.test import TestCase

from apps.control_params.api.serializers import ControlParameterSerializer
from apps.control_params.models import ControlParameter
from apps.heating_params.models import HeatingParameter


class TestControlParameter(TestCase):
    def setUp(self):
        pass

    def test_blank_initial_data(self):
        """If no supply then serializer will be stuck at `heating_params`"""
        serializer = ControlParameterSerializer(data={})
        assert False is serializer.is_valid()

    def test_control_param_serializer_number_mismatch(self):
        data = {
            'no_break_point': 3,
            'max_run_time': 10,
            'heating_params': [
                {
                    'break_point_number': 2,
                    'breakpoint_time': 0,
                    'timestep': 0.01,

                    'particle_species': "E",
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
                },
            ]
        }
        serializer = ControlParameterSerializer(data=data)
        detail = f"Heating params count is mismatch with given number of break point"

        assert False is serializer.is_valid()
        assert detail == str(serializer.errors.get('heating_params')[0])

    def test_control_param_serializer(self):
        data = {
            'no_break_point': 3,
            'max_run_time': 10,
            'heating_params': [
                {
                    'break_point_number': 2,
                    'breakpoint_time': 0,
                    'timestep': 0.01,

                    'particle_species': "E",
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
                },
                {
                    'break_point_number': 2,
                    'breakpoint_time': 0,
                    'timestep': 0.01,

                    'particle_species': "E",
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
            ]
        }
        serializer = ControlParameterSerializer(data=data)
        is_valid = serializer.is_valid()
        serializer.save()
        assert is_valid is serializer.is_valid()
        assert 3 == HeatingParameter.objects.count()
        assert 1 == ControlParameter.objects.count()
