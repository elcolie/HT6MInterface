from rest_framework import serializers

from apps.commons.abstract_classes import AbstractSpecieSerializer
from apps.commons.constants import PLASMA_PARAMS
from apps.plasma_params.models import PlasmaParameter, Electron, Hydrogen, Deuterium, Tritium


class PlasmaParameterSerializer(serializers.ModelSerializer):
    nsmax = serializers.IntegerField(default=PLASMA_PARAMS['nsmax'], min_value=2, max_value=4, )  # [2, 4]
    density_eqn = serializers.BooleanField(default=PLASMA_PARAMS['density_eqn'], )

    class Meta:
        model = PlasmaParameter
        fields = [
            'nsmax',
            'density_eqn',
        ]


class ElectronSerializer(AbstractSpecieSerializer):
    class Meta(AbstractSpecieSerializer.Meta):
        model = Electron


class HydrogenSerializer(AbstractSpecieSerializer):
    class Meta(AbstractSpecieSerializer.Meta):
        model = Hydrogen


class DeuteriumSerializer(AbstractSpecieSerializer):
    class Meta(AbstractSpecieSerializer.Meta):
        model = Deuterium


class TritiumSerializer(AbstractSpecieSerializer):
    class Meta(AbstractSpecieSerializer.Meta):
        model = Tritium
