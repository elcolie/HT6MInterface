from rest_framework import serializers

from apps.plasma_params.models import PlasmaParameter, NSMAX, IMPURITY_NO, NEUTRAL_NO, PARTICLE_SOURCE_MODEL, \
    NUMBER_PARTICLE_SOURCE, PARTICLE_SOURCE_SPECIES, DENSITY_EQN, ATOMIC_NO, CHARGE_NO, DENSITY_AXIS, DENSITY_SURFACE, \
    TEMPERATURE_AXIS, TEMPERATURE_SURFACE, PARTICLE_SOURCE_RATE, RADIAL_POSITION, RADIAL_WIDTH


class PlasmaParameterSerializer(serializers.ModelSerializer):
    nsmax = serializers.IntegerField(default=NSMAX)
    density_eqn = serializers.FloatField(default=DENSITY_EQN)
    atomic_no = serializers.JSONField(default=ATOMIC_NO)
    charge_no = serializers.JSONField(default=CHARGE_NO)
    density_axis = serializers.JSONField(default=DENSITY_AXIS)
    density_surface = serializers.JSONField(default=DENSITY_SURFACE)
    temperature_axis = serializers.JSONField(default=TEMPERATURE_AXIS)
    temperature_surface = serializers.JSONField(default=TEMPERATURE_SURFACE)
    impurity_no = serializers.IntegerField(default=IMPURITY_NO)
    neutral_no = serializers.IntegerField(default=NEUTRAL_NO)
    particle_source_model = serializers.IntegerField(default=PARTICLE_SOURCE_MODEL)
    number_particle_source = serializers.IntegerField(default=NUMBER_PARTICLE_SOURCE)
    particle_source_rate = serializers.FloatField(default=PARTICLE_SOURCE_RATE)
    radial_position = serializers.FloatField(default=RADIAL_POSITION)
    radial_width = serializers.FloatField(default=RADIAL_WIDTH)
    particle_source_species = serializers.IntegerField(default=PARTICLE_SOURCE_SPECIES)

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
