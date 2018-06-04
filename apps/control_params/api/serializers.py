from rest_framework import serializers

from apps.commons.constants import CONTROL_PARAMS
from apps.control_params.models import ControlParameter


class ControlParameterSerializer(serializers.ModelSerializer):
    no_break_point = serializers.IntegerField(min_value=2, default=CONTROL_PARAMS['no_break_point'])
    max_run_time = serializers.IntegerField(min_value=3, default=CONTROL_PARAMS['max_run_time'])

    class Meta:
        model = ControlParameter
        fields = [
            'no_break_point',
            'max_run_time',
        ]
