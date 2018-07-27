import json
import logging
import typing

from django.contrib.auth import get_user_model
from django_celery_results.models import TaskResult
from rest_framework import serializers

from apps.advanced_cases.api.serializers import AdvancedCaseSerializer
from apps.advanced_cases.models import AdvancedCase
from apps.scenarios.models import Scenario

User = get_user_model()
logger = logging.getLogger('django')


class TaskResultSerializer(serializers.ModelSerializer):
    owner = serializers.SerializerMethodField()
    input_file = serializers.SerializerMethodField()

    class Meta:
        model = TaskResult
        fields = [
            'task_id',
            'owner',
            'status',
            'input_file',
        ]

    def get_owner(self, task_result: TaskResult):
        my_dict = json.loads(task_result.result)
        try:
            scenario = Scenario.objects.filter(id=my_dict.get('scenario')).first()
        except AttributeError:
            msg = f"AttributeError at task_result: {task_result.id}"
            logger.info(msg)
            return None
        else:
            if scenario is None:
                return None
            return scenario.created_by.username

    def get_input_file(self, task_result: TaskResult):
        """
        Welcome to border of Celery and Fortran.
        Watch out landmines
        """
        json_loads = json.loads(task_result.result)
        if not isinstance(json_loads, typing.Dict):
            return None

        scenario_id = json_loads.get('scenario')
        if scenario_id is None:
            return None
        else:
            scenario = Scenario.objects.filter(id=scenario_id).first()
            if scenario is None:
                return None
            else:
                try:
                    scenario.advanced_case
                except AdvancedCase.DoesNotExist:
                    return None
                else:
                    serializer = AdvancedCaseSerializer(scenario.advanced_case, context=self.context)
                    return serializer.data
