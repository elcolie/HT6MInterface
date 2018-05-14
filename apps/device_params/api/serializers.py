from rest_framework import serializers

from apps.commons.constants import DEVICE_PARAMS
from apps.device_params.models import DeviceParameter


class DeviceParameterSerializer(serializers.ModelSerializer):
    major_radius = serializers.FloatField(default=DEVICE_PARAMS['major_radius'], required=False)
    minor_radius = serializers.FloatField(default=DEVICE_PARAMS['minor_radius'], required=False)
    triangularity = serializers.FloatField(default=DEVICE_PARAMS['triangularity'], required=False)
    ellipticity = serializers.FloatField(default=DEVICE_PARAMS['ellipticity'], required=False)
    plasma_current = serializers.FloatField(default=DEVICE_PARAMS['plasma_current'], required=False)
    magnetic_field = serializers.FloatField(default=DEVICE_PARAMS['magnetic_field'], required=False)

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
