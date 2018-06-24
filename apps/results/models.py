from django.db import models

# Create your models here.
from apps.commons.abstract_classes import AbstractTimestamp
from apps.scenarios.models import Scenario


class Result(AbstractTimestamp):
    scenario = models.ForeignKey(Scenario, on_delete=models.CASCADE, related_name='results',
                                 related_query_name='results')
    output = models.FileField(upload_to='outputs')
    passed = models.BooleanField(default=True)

    def __str__(self):
        return f"{self.scenario}"
