from django.contrib.auth.models import User
from django.db import models

from apps.commons.utils import AbstractTimestamp


class DeviceParameter(AbstractTimestamp):
    major_radius = models.FloatField(default=0.65)  # meter
    minor_radius = models.FloatField(default=0.2)  # meter
    triangularity = models.FloatField(default=0)
    ellipticity = models.FloatField(default=1)
    plasma_current = models.FloatField(default=0.04)  # MA
    magnetic_field = models.FloatField(default=1.5)  # Tesla
    created_by = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, blank=True,
                                   related_name='created_device_params',
                                   related_query_name='created_device_params')
    updated_by = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, blank=True,
                                   related_name='updated_device_params',
                                   related_query_name='updated_device_params')

    def __str__(self):
        return f"{self.major_radius} {self.plasma_current}"
