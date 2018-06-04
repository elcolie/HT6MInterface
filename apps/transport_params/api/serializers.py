from rest_framework import serializers

from apps.commons.constants import TRANSPORT_PARAMS
from apps.transport_params.models import TransportParameter


class TransportParameterSerializer(serializers.ModelSerializer):
    transport_model = serializers.CharField(default=TRANSPORT_PARAMS['transport_model'])
    resistivity = serializers.IntegerField(default=TRANSPORT_PARAMS['resistivity'])
    particle_diffusion = serializers.IntegerField(default=TRANSPORT_PARAMS['particle_diffusion'])
    heat_pinch = serializers.IntegerField(default=TRANSPORT_PARAMS['heat_pinch'])
    bootstrap_current = serializers.IntegerField(default=TRANSPORT_PARAMS['bootstrap_current'])
    neoclassical = serializers.IntegerField(default=TRANSPORT_PARAMS['neoclassical'])

    class Meta:
        model = TransportParameter
        fields = [
            'transport_model',
            'resistivity',
            'particle_diffusion',
            'heat_pinch',
            'bootstrap_current',
            'neoclassical',
        ]
