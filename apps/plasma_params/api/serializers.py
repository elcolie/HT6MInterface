from rest_framework import serializers

from apps.plasma_params.models import PlasmaParameter, NSMAX, IMPURITY_NO, NEUTRAL_NO, PARTICLE_SOURCE_MODEL, \
    NUMBER_PARTICLE_SOURCE, PARTICLE_SOURCE_SPECIES, DENSITY_EQN, ATOMIC_NO, CHARGE_NO, DENSITY_AXIS, DENSITY_SURFACE, \
    TEMPERATURE_AXIS, TEMPERATURE_SURFACE, PARTICLE_SOURCE_RATE, RADIAL_POSITION, RADIAL_WIDTH


class PlasmaParameterSerializer(serializers.ModelSerializer):
    nsmax = serializers.IntegerField(required=False)
    density_eqn = serializers.FloatField(required=False)
    atomic_no = serializers.JSONField(required=False)
    charge_no = serializers.JSONField(required=False)
    density_axis = serializers.JSONField(required=False)
    density_surface = serializers.JSONField(required=False)
    temperature_axis = serializers.JSONField(required=False)
    temperature_surface = serializers.JSONField(required=False)
    impurity_no = serializers.IntegerField(required=False)
    neutral_no = serializers.IntegerField(required=False)
    particle_source_model = serializers.IntegerField(required=False)
    number_particle_source = serializers.IntegerField(required=False)
    particle_source_rate = serializers.FloatField(required=False)
    radial_position = serializers.FloatField(required=False)
    radial_width = serializers.FloatField(required=False)
    particle_source_species = serializers.IntegerField(required=False)

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
