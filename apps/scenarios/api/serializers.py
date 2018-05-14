from rest_framework import serializers

from apps.commons.constants import DEVICE_PARAMS, PLASMA_PARAMS, TRANSPORT_PARAMS, CONTROL_PARAMS, HEATING_PARAMS
from apps.control_params.api.serializers import ControlParameterSerializer
from apps.device_params.api.serializers import DeviceParameterSerializer
from apps.heating_params.api.serializers import HeatingParameterSerializer
from apps.plasma_params.api.serializers import PlasmaParameterSerializer
from apps.scenarios.models import Scenario
from apps.transport_params.api.serializers import TransportParameterSerializer


class ScenarioSerializer(serializers.ModelSerializer):
    device_params = DeviceParameterSerializer()
    plasma_params = PlasmaParameterSerializer()
    transport_params = TransportParameterSerializer()
    control_params = ControlParameterSerializer()
    heating_params = HeatingParameterSerializer()
    created_by = serializers.HiddenField(default=serializers.CurrentUserDefault())

    class Meta:
        model = Scenario
        fields = [
            'device_params',
            'plasma_params',
            'transport_params',
            'control_params',
            'heating_params',
            'created_by',
        ]

    def create(self, validated_data) -> Scenario:
        validated_device_data = validated_data.get('device_params', DEVICE_PARAMS)
        validated_plasma_params = validated_data.get('plasma_params', PLASMA_PARAMS)
        validated_transport_params = validated_data.get('transport_params', TRANSPORT_PARAMS)
        validated_control_params = validated_data.get('control_params', CONTROL_PARAMS)
        validated_heating_params = validated_data.get('heating_params', HEATING_PARAMS)

        device_param_serializer = DeviceParameterSerializer(data=validated_device_data)
        plasma_params_serializer = PlasmaParameterSerializer(data=validated_plasma_params)
        transport_params_serializer = TransportParameterSerializer(data=validated_transport_params)
        control_params_serializer = ControlParameterSerializer(data=validated_control_params)
        heating_params_serializer = HeatingParameterSerializer(data=validated_heating_params)

        device_instance = device_param_serializer.create(validated_device_data)
        plasma_instance = plasma_params_serializer.create(validated_plasma_params)
        transport_instance = transport_params_serializer.create(validated_transport_params)
        control_instance = control_params_serializer.create(validated_control_params)
        heating_instance = heating_params_serializer.create(validated_heating_params)

        scenario_instance = Scenario.objects.create(device_params=device_instance,
                                                    plasma_params=plasma_instance,
                                                    transport_params=transport_instance,
                                                    control_params=control_instance,
                                                    heating_params=heating_instance,
                                                    created_by=validated_data.get('created_by'))
        return scenario_instance
