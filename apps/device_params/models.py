from django.db import models

from apps.commons.abstract_classes import AbstractTimestamp

MAJOR_RADIUS = 0.65
MINOR_RADIUS = 0.2
TRIANGULARITY = 0
ELLIPTICITY = 1
PLASMA_CURRENT = 0.04
MAGNETIC_FIELD = 1.5


class DeviceParameter(AbstractTimestamp):
    major_radius = models.FloatField(default=MAJOR_RADIUS)  # meter
    minor_radius = models.FloatField(default=MINOR_RADIUS)  # meter
    triangularity = models.FloatField(default=TRIANGULARITY)
    ellipticity = models.FloatField(default=ELLIPTICITY)
    plasma_current = models.FloatField(default=PLASMA_CURRENT)  # MA
    magnetic_field = models.FloatField(default=MAGNETIC_FIELD)  # Tesla

    def __str__(self):
        return f"{self.major_radius} {self.plasma_current}"
