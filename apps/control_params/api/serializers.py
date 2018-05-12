from rest_framework import serializers

from apps.control_params.models import ControlParameter


class ControlParamSerializer(serializers.ModelSerializer):
    class Meta:
        model = ControlParameter
        fields = [
            'timestep',
            'mesh_point',
            'snap_data_print',
            'radial_profile_snap',
            'time_evolution_snap',
        ]
