from rest_framework import serializers

from apps.commons.constants import HEATING_PARAMS
from apps.heating_params.models import HeatingParameter


class HeatingParameterSerializer(serializers.ModelSerializer):
    nbi_power = serializers.FloatField(default=HEATING_PARAMS['nbi_power'])
    nbi_radial_position = serializers.FloatField(default=HEATING_PARAMS['nbi_radial_position'])
    nbi_radial_width = serializers.FloatField(default=HEATING_PARAMS['nbi_radial_width'])
    icrf_power = serializers.FloatField(default=HEATING_PARAMS['icrf_power'])
    icrf_radial = serializers.FloatField(default=HEATING_PARAMS['icrf_radial'])
    icrf_radial_width = serializers.FloatField(default=HEATING_PARAMS['icrf_radial_width'])

    class Meta:
        model = HeatingParameter
        fields = [
            'nbi_power',
            'nbi_radial_position',
            'nbi_radial_width',
            'icrf_power',
            'icrf_radial',
            'icrf_radial_width',
        ]
