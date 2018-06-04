from django.db import models

from apps.commons.abstract_classes import AbstractTimestamp


class ControlParameter(AbstractTimestamp):
    no_break_point = models.PositiveSmallIntegerField(default=2)  # minValue = 2
    max_run_time = models.PositiveIntegerField(default=3)  # minValue = 3

    def __str__(self):
        return f"{self.no_break_point} {self.max_run_time}"
