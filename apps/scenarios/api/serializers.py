from rest_framework import serializers

from apps.scenarios.models import Scenario


class ScenarioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Scenario
        fields = [
            'device_params',
            'plasma_params',
            'transport_params',
            'control_params',
            'heating_params',
        ]
