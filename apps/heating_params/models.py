from django.contrib.auth.models import User
from django.db import models

from apps.commons.utils import AbstractTimestamp


class HeatingParameter(AbstractTimestamp):
    nbi_power = models.FloatField(default=0)
    nbi_radial_position = models.FloatField(default=0)
    nbi_radial_width = models.FloatField(default=0.5)
    icrf_power = models.FloatField(default=0)
    icrf_radial = models.FloatField(default=0)
    icrf_radial_width = models.FloatField(default=0.5)
    created_by = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, blank=True,
                                   related_name='created_heating_params',
                                   related_query_name='created_heating_params')
    updated_by = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, blank=True,
                                   related_name='updated_heating_params',
                                   related_query_name='updated_heating_params')

    def __str__(self):
        return f"{self.nbi_power} {self.icrf_power}"
