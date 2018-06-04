from rest_framework import serializers

from apps.commons.constants import PLASMA_PARAMS
from apps.plasma_params.models import PlasmaParameter


class PlasmaParameterSerializer(serializers.ModelSerializer):
    nsmax = serializers.IntegerField(default=PLASMA_PARAMS['nsmax'], min_value=2, max_value=4, )  # [2, 4]
    density_eqn = serializers.BooleanField(default=PLASMA_PARAMS['density_eqn'], )

    class Meta:
        model = PlasmaParameter
        fields = [
            'nsmax',
            'density_eqn',
        ]
