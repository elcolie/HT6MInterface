from rest_framework import serializers

from apps.advanced_cases.models import AdvancedCase


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
