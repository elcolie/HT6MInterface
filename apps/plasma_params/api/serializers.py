from rest_framework import serializers

from apps.commons.abstract_classes import AbstractSpecieSerializer
from apps.commons.constants import PLASMA_PARAMS
from apps.plasma_params.models import PlasmaParameter, Electron, Hydrogen, Deuterium, Tritium, DensityAndTemperature


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


class PlasmaParameterSerializer(serializers.ModelSerializer):
    nsmax = serializers.IntegerField(default=PLASMA_PARAMS['nsmax'], min_value=2, max_value=4, )  # [2, 4]
    density_eqn = serializers.BooleanField(default=PLASMA_PARAMS['density_eqn'], )

    class Meta:
        model = PlasmaParameter
        fields = [
            'nsmax',
            'density_eqn',
        ]


class DensityAndTemperatureSerializer(serializers.ModelSerializer):
    electron = ElectronSerializer()
    hydrogen = HydrogenSerializer()
    deuterium = DeuteriumSerializer(required=False)
    tritium = TritiumSerializer(required=False)

    class Meta:
        model = DensityAndTemperature
        fields = [
            'id',
            'electron',
            'hydrogen',
            'deuterium',
            'tritium',
        ]

    def create(self, validated_data):
        electron = validated_data.pop('electron')
        hydrogen = validated_data.pop('hydrogen')
        deuterium = validated_data.get('deuterium')
        tritium = validated_data.get('tritium')

        electron_serializer = ElectronSerializer(data=electron)
        electron_serializer.is_valid(raise_exception=True)  # Before call `.save()`
        hydrogen_serializer = HydrogenSerializer(data=hydrogen)
        hydrogen_serializer.is_valid(raise_exception=True)  # Before call `.save()`

        data = {
            'electron': electron_serializer.save(),
            'hydrogen': hydrogen_serializer.save(),
        }
        if deuterium is not None:
            deuterium_serilizer = DeuteriumSerializer(data=deuterium)
            deuterium_serilizer.is_valid(raise_exception=True)  # Before call `.save()`
            data['deuterium'] = deuterium_serilizer.save()
        if tritium is not None:
            tritium_serilizer = TritiumSerializer(data=tritium)
            tritium_serilizer.is_valid(raise_exception=True)  # Before call `.save()`
            data['tritium'] = tritium_serilizer.save()
        return DensityAndTemperature.objects.create(**data)
