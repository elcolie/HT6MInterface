import logging

from rest_framework import serializers

from apps.results.models import Result

logger = logging.getLogger('django')


class ResultSerializer(serializers.ModelSerializer):
    output = serializers.SerializerMethodField()

    class Meta:
        model = Result
        fields = [
            'id',
            'scenario',
            'output',
            'passed',
        ]

    # TODO: Remove dummy
    # Python will read out file and serialize it to `frontend`
    def get_output(self, result: Result):
        my_output = []
        for i in range(1, 101):
            my_output.append({
                'time': i,
                'value': 2 * i,
            })
        return {
            'name': 'gt1',
            'outputs': my_output,
        }
