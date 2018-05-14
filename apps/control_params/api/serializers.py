from rest_framework import serializers

from apps.control_params.models import ControlParameter


class ControlParameterSerializer(serializers.ModelSerializer):
    timestep = serializers.FloatField(required=False)
    mesh_point = serializers.IntegerField(required=False)
    snap_data_print = serializers.IntegerField(required=False)
    radial_profile_snap = serializers.IntegerField(required=False)
    time_evolution_snap = serializers.IntegerField(required=False)

    class Meta:
        model = ControlParameter
        fields = [
            'timestep',
            'mesh_point',
            'snap_data_print',
            'radial_profile_snap',
            'time_evolution_snap',
        ]
