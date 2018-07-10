from rest_framework import serializers

from apps.commons.constants import CONTROL_PARAMS
from apps.control_params.models import ControlParameter
from apps.heating_params.api.serializers import HeatingParameterSerializer
from apps.heating_params.models import HeatingParameter


class ControlParameterSerializer(serializers.ModelSerializer):
    no_break_point = serializers.IntegerField(min_value=2, default=CONTROL_PARAMS['no_break_point'])
    max_run_time = serializers.IntegerField(min_value=3, default=CONTROL_PARAMS['max_run_time'])
    heating_params = HeatingParameterSerializer(many=True, required=True)

    class Meta:
        model = ControlParameter
        fields = [
            'no_break_point',
            'max_run_time',
            'heating_params',
        ]

    def validate(self, attrs):
        if attrs.get('no_break_point') != len(attrs.get('heating_params')):
            detail = {
                "heating_params": f"Heating params count is mismatch with given number of break point"
            }
            raise serializers.ValidationError(detail=detail)
        return attrs

    def create(self, validated_data):
        heating_params = validated_data.pop('heating_params')
        control_param = super().create(validated_data)
        tmp = []
        for heating_param in heating_params:
            mydict = {
                'control_param': control_param
            }
            tmp.append(HeatingParameter(**{**heating_param, **mydict}))
        HeatingParameter.objects.bulk_create(tmp)
        return control_param
