from rest_framework import serializers

from apps.transport_params.models import TransportParameter


class TransportParameterSerializer(serializers.ModelSerializer):
    class Meta:
        model = TransportParameter
        fields = [
            'resistivity',
            'particle_diffusion',
            'heat_pinch',
            'bootstrap_current',
            'neoclassical',
        ]
