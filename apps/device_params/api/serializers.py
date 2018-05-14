from rest_framework import serializers

from apps.device_params.models import DeviceParameter


class DeviceParameterSerializer(serializers.ModelSerializer):
    major_radius = serializers.FloatField(required=False)
    minor_radius = serializers.FloatField(required=False)
    triangularity = serializers.FloatField(required=False)
    ellipticity = serializers.FloatField(required=False)
    plasma_current = serializers.FloatField(required=False)
    magnetic_field = serializers.FloatField(required=False)

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
