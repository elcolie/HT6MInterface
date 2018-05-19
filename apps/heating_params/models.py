from django.db import models

from apps.commons.abstract_classes import AbstractTimestamp
from apps.commons.constants import HEATING_PARAMS
from apps.scenarios.models import Scenario


class HeatingParameter(AbstractTimestamp):
    nbi_power = models.FloatField(default=HEATING_PARAMS['nbi_power'])
    nbi_radial_position = models.FloatField(default=HEATING_PARAMS['nbi_radial_position'])
    nbi_radial_width = models.FloatField(default=HEATING_PARAMS['nbi_radial_width'])
    icrf_power = models.FloatField(default=HEATING_PARAMS['icrf_power'])
    icrf_radial = models.FloatField(default=HEATING_PARAMS['icrf_radial'])
    icrf_radial_width = models.FloatField(default=HEATING_PARAMS['icrf_radial_width'])
    scenario = models.ForeignKey(Scenario, on_delete=models.CASCADE, related_name='heat_params',
                                 related_query_name='heat_params')

    def __str__(self):
        return f"{self.nbi_power} {self.icrf_power}"
