from django.db import models

from apps.commons.utils import AbstractTimestamp


class HeatingParameter(AbstractTimestamp):
    nbi_power = models.FloatField(default=0)
    nbi_radial_position = models.FloatField(default=0)
    nbi_radial_width = models.FloatField(default=0.5)
    icrf_power = models.FloatField(default=0)
    icrf_radial = models.FloatField(default=0)
    icrf_radial_width = models.FloatField(default=0.5)

    def __str__(self):
        return f"{self.nbi_power} {self.icrf_power}"
