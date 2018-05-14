from rest_framework import serializers

from apps.device_params.models import DeviceParameter, MAJOR_RADIUS, MINOR_RADIUS, TRIANGULARITY, ELLIPTICITY, \
    MAGNETIC_FIELD, PLASMA_CURRENT


class DeviceParameterSerializer(serializers.ModelSerializer):
    major_radius = serializers.FloatField(default=MAJOR_RADIUS)
    minor_radius = serializers.FloatField(default=MINOR_RADIUS)
    triangularity = serializers.FloatField(default=TRIANGULARITY)
    ellipticity = serializers.FloatField(default=ELLIPTICITY)
    plasma_current = serializers.FloatField(default=PLASMA_CURRENT)
    magnetic_field = serializers.FloatField(default=MAGNETIC_FIELD)

    class Meta:
        model = DeviceParameter
        fields = [
            'major_radius',
            'minor_radius',
            'triangularity',
            'ellipticity',
            'plasma_current',
            'magnetic_field',
        ]
