from django.db import models

from apps.commons.abstract_classes import AbstractTimestamp

RESISTIVITY = 1
PARTICLE_DIFFUSION = 1
HEAT_PINCH = 1
BOOTSTRAP_CURRENT = 1
NEOCLASSICA = 0


class TransportParameter(AbstractTimestamp):
    resistivity = models.PositiveSmallIntegerField(default=RESISTIVITY)
    particle_diffusion = models.PositiveSmallIntegerField(default=PARTICLE_DIFFUSION)
    heat_pinch = models.PositiveSmallIntegerField(default=HEAT_PINCH)
    bootstrap_current = models.PositiveSmallIntegerField(default=BOOTSTRAP_CURRENT)
    neoclassical = models.PositiveSmallIntegerField(default=NEOCLASSICA)

    def __str__(self):
        return f"{self.particle_diffusion} {self.neoclassical}"
