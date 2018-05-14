from rest_framework import serializers

from apps.control_params.models import ControlParameter, TIMESTEP, MESH_POINT, SNAP_DATA_PRINT, RADIAL_PROFILE_SNAP, \
    TIME_EVOLUTION_SNAP


class ControlParameterSerializer(serializers.ModelSerializer):
    timestep = serializers.FloatField(default=TIMESTEP)
    mesh_point = serializers.IntegerField(default=MESH_POINT)
    snap_data_print = serializers.IntegerField(default=SNAP_DATA_PRINT)
    radial_profile_snap = serializers.IntegerField(default=RADIAL_PROFILE_SNAP)
    time_evolution_snap = serializers.IntegerField(default=TIME_EVOLUTION_SNAP)

    class Meta:
        model = ControlParameter
        fields = [
            'timestep',
            'mesh_point',
            'snap_data_print',
            'radial_profile_snap',
            'time_evolution_snap',
        ]
