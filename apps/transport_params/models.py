from django.db import models

from apps.commons.utils import AbstractTimestamp


class TransportParameter(AbstractTimestamp):
    resistivity = models.PositiveSmallIntegerField(default=1)
    particle_diffusion = models.PositiveSmallIntegerField(default=1)
    heat_pinch = models.PositiveSmallIntegerField(default=1)
    bootstrap_current = models.PositiveSmallIntegerField(default=1)
    neoclassical = models.PositiveSmallIntegerField(default=0)

    def __str__(self):
        return f"{self.particle_diffusion} {self.neoclassical}"
