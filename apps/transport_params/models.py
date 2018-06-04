from django.db import models

from apps.commons.abstract_classes import AbstractTimestamp
from apps.commons.constants import TRANSPORT_PARAMS


class TransportParameter(AbstractTimestamp):
    transport_model = models.CharField(default=TRANSPORT_PARAMS['transport_model'], max_length=20)
    resistivity = models.CharField(default=TRANSPORT_PARAMS['resistivity'], max_length=40)
    particle_diffusion = models.CharField(default=TRANSPORT_PARAMS['particle_diffusion'], max_length=40)
    heat_pinch = models.CharField(default=TRANSPORT_PARAMS['heat_pinch'], max_length=40)
    bootstrap_current = models.CharField(default=TRANSPORT_PARAMS['bootstrap_current'], max_length=20)
    neoclassical = models.CharField(default=TRANSPORT_PARAMS['neoclassical'], max_length=20)

    def __str__(self):
        return f"{self.particle_diffusion} {self.neoclassical}"
