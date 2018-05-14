from rest_framework import serializers

from apps.control_params.models import ControlParameter
from apps.commons.constants import CONTROL_PARAMS


class ControlParameterSerializer(serializers.ModelSerializer):
    timestep = serializers.FloatField(default=CONTROL_PARAMS['timestep'])
    mesh_point = serializers.IntegerField(default=CONTROL_PARAMS['mesh_point'])
    snap_data_print = serializers.IntegerField(default=CONTROL_PARAMS['snap_data_print'])
    radial_profile_snap = serializers.IntegerField(default=CONTROL_PARAMS['radial_profile_snap'])
    time_evolution_snap = serializers.IntegerField(default=CONTROL_PARAMS['time_evolution_snap'])

    class Meta:
        model = ControlParameter
        fields = [
            'timestep',
            'mesh_point',
            'snap_data_print',
            'radial_profile_snap',
            'time_evolution_snap',
        ]
