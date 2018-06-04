from rest_framework import serializers

from apps.plasma_species.models import PlasmaSpecie


class PlasmaSpecieSerializer(serializers.ModelSerializer):
    class Meta:
        model = PlasmaSpecie
        fields = [
            'name',
            'density_axis',
            'density_surface',
            'temperature_axis',
            'temperature_surface',
            'plasma_parameter',
        ]
