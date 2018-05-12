from django.contrib.auth.models import User
from django.db import models

from apps.commons.utils import AbstractTimestamp


class TransportParameter(AbstractTimestamp):
    resistivity = models.PositiveSmallIntegerField(default=1)
    particle_diffusion = models.PositiveSmallIntegerField(default=1)
    heat_pinch = models.PositiveSmallIntegerField(default=1)
    bootstrap_current = models.PositiveSmallIntegerField(default=1)
    neoclassical = models.PositiveSmallIntegerField(default=0)
    created_by = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, blank=True,
                                   related_name='created_transport_params',
                                   related_query_name='created_transport_params')
    updated_by = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, blank=True,
                                   related_name='updated_transport_params',
                                   related_query_name='updated_transport_params')

    def __str__(self):
        return f"{self.particle_diffusion} {self.neoclassical}"
