from rest_framework import serializers

from apps.commons.constants import TRANSPORT_PARAMS
from apps.transport_params.models import TransportParameter


class TransportParameterSerializer(serializers.ModelSerializer):
    resistivity = serializers.IntegerField(required=False)
    particle_diffusion = serializers.IntegerField(required=False)
    heat_pinch = serializers.IntegerField(required=False)
    bootstrap_current = serializers.IntegerField(required=False)
    neoclassical = serializers.IntegerField(required=False)

    class Meta:
        model = TransportParameter
        fields = [
            'resistivity',
            'particle_diffusion',
            'heat_pinch',
            'bootstrap_current',
            'neoclassical',
        ]
