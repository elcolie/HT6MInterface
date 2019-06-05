from model_mommy import mommy
from rest_framework import serializers

from apps.advanced_cases.models import AdvancedCase
from apps.scenarios.models import Scenario
from celery_ht6m import fortran_simulate


class AdvancedCaseSerializer(serializers.ModelSerializer):
    url = serializers.HyperlinkedIdentityField(view_name='apis:advanced_case-detail')

    class Meta:
        model = AdvancedCase
        fields = [
            'url',
            'id',
            'file',
            'comment',
        ]

    def create(self, validated_data):
        scenario = mommy.make(Scenario)  # TODO: Wiring the case from input file
        validated_data['created_by'] = self.context['request'].user
        validated_data['scenario'] = scenario
        mydict = {
            'filename': validated_data.get('file').name,
            'comment': validated_data.get('comment'),
        }
        adv_case = super().create(validated_data)
        mydict['scenario'] = scenario.id

        # To read FileField
        # adv_case.file.readline()
        fortran_simulate.delay(mydict)
        return adv_case
