from rest_framework import serializers

from apps.plasma_params.models import PlasmaParameter


class PlasmaParameterSerializer(serializers.ModelSerializer):
    class Meta:
        model = PlasmaParameter
        fields = [
            'nsmax',
            'density_eqn',
            'atomic_no',
            'charge_no',
            'density_axis',
            'density_surface',
            'temperature_axis',
            'temperature_surface',
            'impurity_no',
            'neutral_no',
            'particle_source_model',
            'number_particle_source',
            'particle_source_rate',
            'radial_position',
            'radial_width',
            'particle_source_species',
        ]
