from django.db import models

from apps.commons.abstract_classes import AbstractTimestamp

NBI_POWER = 0
NBI_RADIAL_POSITION = 0
NBI_RADIAL_WIDTH = 0.5
ICRF_POWER = 0
ICRF_RADIAL = 0
ICRF_RADIAL_WIDTH = 0.5


class HeatingParameter(AbstractTimestamp):
    nbi_power = models.FloatField(default=NBI_POWER)
    nbi_radial_position = models.FloatField(default=NBI_RADIAL_POSITION)
    nbi_radial_width = models.FloatField(default=NBI_RADIAL_WIDTH)
    icrf_power = models.FloatField(default=ICRF_POWER)
    icrf_radial = models.FloatField(default=ICRF_RADIAL)
    icrf_radial_width = models.FloatField(default=ICRF_RADIAL_WIDTH)

    def __str__(self):
        return f"{self.nbi_power} {self.icrf_power}"
