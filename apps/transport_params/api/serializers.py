from rest_framework import serializers

from apps.transport_params.models import TransportParameter, RESISTIVITY, PARTICLE_DIFFUSION, HEAT_PINCH, \
    BOOTSTRAP_CURRENT, NEOCLASSICA


class TransportParameterSerializer(serializers.ModelSerializer):
    resistivity = serializers.IntegerField(default=RESISTIVITY)
    particle_diffusion = serializers.IntegerField(default=PARTICLE_DIFFUSION)
    heat_pinch = serializers.IntegerField(default=HEAT_PINCH)
    bootstrap_current = serializers.IntegerField(default=BOOTSTRAP_CURRENT)
    neoclassical = serializers.IntegerField(default=NEOCLASSICA)

    class Meta:
        model = TransportParameter
        fields = [
            'resistivity',
            'particle_diffusion',
            'heat_pinch',
            'bootstrap_current',
            'neoclassical',
        ]
