from rest_framework import serializers

from apps.commons.constants import DEVICE_PARAMS
from apps.device_params.models import DeviceParameter


class DeviceParameterSerializer(serializers.ModelSerializer):
    machine = serializers.CharField(default=DEVICE_PARAMS['machine'], max_length=12)
    major_radius = serializers.FloatField(default=DEVICE_PARAMS['major_radius'])
    minor_radius = serializers.FloatField(default=DEVICE_PARAMS['minor_radius'])
    triangularity = serializers.FloatField(default=DEVICE_PARAMS['triangularity'])
    ellipticity = serializers.FloatField(default=DEVICE_PARAMS['ellipticity'])
    plasma_current = serializers.FloatField(default=DEVICE_PARAMS['plasma_current'])
    magnetic_field = serializers.FloatField(default=DEVICE_PARAMS['magnetic_field'])

    class Meta:
        model = DeviceParameter
        fields = [
            'machine',
            'major_radius',
            'minor_radius',
            'triangularity',
            'ellipticity',
            'plasma_current',
            'magnetic_field',
        ]
