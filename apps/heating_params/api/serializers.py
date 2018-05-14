from rest_framework import serializers

from apps.heating_params.models import HeatingParameter, NBI_POWER, NBI_RADIAL_POSITION, NBI_RADIAL_WIDTH, ICRF_POWER, \
    ICRF_RADIAL, ICRF_RADIAL_WIDTH


class HeatingParameterSerializer(serializers.ModelSerializer):
    nbi_power = serializers.FloatField(default=NBI_POWER)
    nbi_radial_position = serializers.FloatField(default=NBI_RADIAL_POSITION)
    nbi_radial_width = serializers.FloatField(default=NBI_RADIAL_WIDTH)
    icrf_power = serializers.FloatField(default=ICRF_POWER)
    icrf_radial = serializers.FloatField(default=ICRF_RADIAL)
    icrf_radial_width = serializers.FloatField(default=ICRF_RADIAL_WIDTH)

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
