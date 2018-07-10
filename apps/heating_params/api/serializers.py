from rest_framework import serializers

from apps.commons.constants import HEATING_PARAMS
from apps.heating_params.models import HeatingParameter


class HeatingParameterSerializer(serializers.ModelSerializer):
    """Nested use with ControlParameterSerializer"""
    break_point_number =serializers.IntegerField(min_value=2, default=HEATING_PARAMS['break_point_number'])
    breakpoint_time = serializers.FloatField(min_value=0, default=HEATING_PARAMS['breakpoint_time'])
    timestep = serializers.FloatField(min_value=0.0001, default=HEATING_PARAMS['timestep'])

    rate_of_particle_source = serializers.FloatField(min_value=0, default=HEATING_PARAMS['rate_of_particle_source'])
    radial_position = serializers.FloatField(min_value=0, default=HEATING_PARAMS['radial_position'])
    radial_width = serializers.FloatField(min_value=0, default=HEATING_PARAMS['radial_width'])

    # Heat source
    nbi_power = serializers.FloatField(default=HEATING_PARAMS['nbi_power'])
    nbi_radial_position = serializers.FloatField(default=HEATING_PARAMS['nbi_radial_position'])
    nbi_radial_width = serializers.FloatField(default=HEATING_PARAMS['nbi_radial_width'])

    icrf_power = serializers.FloatField(default=HEATING_PARAMS['icrf_power'])
    icrf_radial = serializers.FloatField(default=HEATING_PARAMS['icrf_radial'])
    icrf_radial_width = serializers.FloatField(default=HEATING_PARAMS['icrf_radial_width'])

    class Meta:
        model = HeatingParameter
        fields = [
            'break_point_number',
            'breakpoint_time',
            'timestep',

            'particle_species',
            'rate_of_particle_source',
            'radial_position',
            'radial_width',

            'nbi_power',
            'nbi_radial_position',
            'nbi_radial_width',
            'icrf_power',
            'icrf_radial',
            'icrf_radial_width',
        ]
