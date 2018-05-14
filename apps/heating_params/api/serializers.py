from rest_framework import serializers

from apps.commons.constants import HEATING_PARAMS
from apps.heating_params.models import HeatingParameter


class HeatingParameterSerializer(serializers.ModelSerializer):
    nbi_power = serializers.FloatField(required=False)
    nbi_radial_position = serializers.FloatField(required=False)
    nbi_radial_width = serializers.FloatField(required=False)
    icrf_power = serializers.FloatField(required=False)
    icrf_radial = serializers.FloatField(required=False)
    icrf_radial_width = serializers.FloatField(required=False)

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
