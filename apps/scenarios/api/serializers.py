from rest_framework import serializers

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
