from django.db import models

from apps.commons.abstract_classes import AbstractTimestamp
from apps.commons.constants import DEVICE_PARAMS


class DeviceParameter(AbstractTimestamp):
    major_radius = models.FloatField(default=DEVICE_PARAMS['major_radius'])  # meter
    minor_radius = models.FloatField(default=DEVICE_PARAMS['minor_radius'])  # meter
    triangularity = models.FloatField(default=DEVICE_PARAMS['triangularity'])
    ellipticity = models.FloatField(default=DEVICE_PARAMS['ellipticity'])
    plasma_current = models.FloatField(default=DEVICE_PARAMS['plasma_current'])  # MA
    magnetic_field = models.FloatField(default=DEVICE_PARAMS['magnetic_field'])  # Tesla

    def __str__(self):
        return f"{self.major_radius} {self.plasma_current}"
