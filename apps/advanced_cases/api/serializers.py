from rest_framework import serializers

from apps.advanced_cases.models import AdvancedCase
from ht6m.celery import fortran_simulate


class AdvancedCaseSerializer(serializers.ModelSerializer):
    created_by = serializers.CurrentUserDefault()

    class Meta:
        model = AdvancedCase
        fields = [
            'id',
            'file',
            'comment',
            'created_by',
        ]
        extra_kwargs = {
            'created_by': {'write_only': True}
        }

    def create(self, validated_data):
        mydict = {
            'filename': validated_data.get('file').name,
            'comment': validated_data.get('comment')
        }
        instance = super().create(validated_data)
        # To read FileField
        # instance.file.readline()
        fortran_simulate.delay(mydict)
        return instance
