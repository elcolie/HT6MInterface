from django.db import models

from apps.commons.abstract_classes import AbstractTimestamp
from apps.commons.constants import TRANSPORT_PARAMS


class TransportParameter(AbstractTimestamp):
    resistivity = models.PositiveSmallIntegerField(default=TRANSPORT_PARAMS['resistivity'])
    particle_diffusion = models.PositiveSmallIntegerField(default=TRANSPORT_PARAMS['particle_diffusion'])
    heat_pinch = models.PositiveSmallIntegerField(default=TRANSPORT_PARAMS['heat_pinch'])
    bootstrap_current = models.PositiveSmallIntegerField(default=TRANSPORT_PARAMS['bootstrap_current'])
    neoclassical = models.PositiveSmallIntegerField(default=TRANSPORT_PARAMS['neoclassical'])

    def __str__(self):
        return f"{self.particle_diffusion} {self.neoclassical}"
