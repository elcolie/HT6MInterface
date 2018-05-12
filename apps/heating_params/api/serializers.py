from rest_framework import serializers

from apps.heating_params.models import HeatingParameter


class HeatingParameterSerializer(serializers.ModelSerializer):
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
