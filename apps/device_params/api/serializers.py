from rest_framework import serializers

from apps.device_params.models import DeviceParameter


class DeviceParameterSerializer(serializers.ModelSerializer):
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
