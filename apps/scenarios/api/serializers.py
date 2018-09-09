from rest_framework import serializers

from apps.commons.constants import DEVICE_PARAMS, PLASMA_PARAMS, TRANSPORT_PARAMS, CONTROL_PARAMS, DENSITY_TEMPERATURE
from apps.control_params.api.serializers import ControlParameterSerializer
from apps.device_params.api.serializers import DeviceParameterSerializer
from apps.plasma_params.api.serializers import PlasmaParameterSerializer, DensityAndTemperatureSerializer
from apps.results.api.serializers import ResultSerializer
from apps.scenarios.models import Scenario
from apps.transport_params.api.serializers import TransportParameterSerializer


class ScenarioSerializer(serializers.ModelSerializer):
    device_params = DeviceParameterSerializer()
    plasma_params = PlasmaParameterSerializer()
    density_temp_params= DensityAndTemperatureSerializer()
    transport_params = TransportParameterSerializer()
    control_params = ControlParameterSerializer()
    comment = serializers.CharField(required=False)

    results = ResultSerializer(many=True, read_only=True)

    class Meta:
        model = Scenario
        fields = [
            'id',
            'device_params',
            'plasma_params',
            'density_temp_params',
            'transport_params',
            'control_params',
            'results',
            'comment',
        ]

    def create(self, validated_data) -> Scenario:
        validated_device_data = validated_data.get('device_params', DEVICE_PARAMS)
        validated_plasma_params = validated_data.get('plasma_params', PLASMA_PARAMS)
        validated_density_temperature = validated_data.get('density_temperatures', DENSITY_TEMPERATURE)
        validated_transport_params = validated_data.get('transport_params', TRANSPORT_PARAMS)
        validated_control_params = validated_data.get('control_params', CONTROL_PARAMS)

        device_param_serializer = DeviceParameterSerializer(data=validated_device_data)
        plasma_params_serializer = PlasmaParameterSerializer(data=validated_plasma_params)
        density_temperature_serializer = DensityAndTemperatureSerializer(data=validated_density_temperature)
        transport_params_serializer = TransportParameterSerializer(data=validated_transport_params)
        control_params_serializer = ControlParameterSerializer(data=validated_control_params)

        device_param_serializer.is_valid()
        plasma_params_serializer.is_valid()
        density_temperature_serializer.is_valid()
        transport_params_serializer.is_valid()
        control_params_serializer.is_valid()

        device_instance = device_param_serializer.create(device_param_serializer.validated_data)
        plasma_instance = plasma_params_serializer.create(plasma_params_serializer.validated_data)
        density_temperature_instance = density_temperature_serializer.save()
        transport_instance = transport_params_serializer.create(transport_params_serializer.validated_data)
        control_instance = control_params_serializer.create(control_params_serializer.validated_data)

        scenario_instance = Scenario.objects.create(device_params=device_instance,
                                                    plasma_params=plasma_instance,
                                                    density_temp_params=density_temperature_instance,
                                                    transport_params=transport_instance,
                                                    control_params=control_instance,
                                                    created_by=self.context['request'].user)
        return scenario_instance
