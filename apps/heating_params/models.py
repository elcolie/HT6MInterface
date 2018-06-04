from django.db import models

from apps.commons.abstract_classes import AbstractTimestamp
from apps.commons.constants import HEATING_PARAMS, HYDROGEN, PARTICLE_SPECIES
from apps.control_params.models import ControlParameter
from apps.scenarios.models import Scenario


class HeatingParameter(AbstractTimestamp):
    """
    Breakpoint of simulation
    """

    break_point_number = models.PositiveIntegerField(default=HEATING_PARAMS['break_point_number'])  # minValue = 2
    breakpoint_time = models.FloatField(default=HEATING_PARAMS['breakpoint_time'])  # minValue = 0
    timestep = models.FloatField(default=HEATING_PARAMS['timestep'])  # minValue = 0.0001

    # Particle source
    particle_species = models.CharField(max_length=2, default=HYDROGEN, choices=PARTICLE_SPECIES)
    rate_of_particle_source = models.FloatField(default=HEATING_PARAMS['rate_of_particle_source'])  # minValue = 0
    radial_position = models.FloatField(default=HEATING_PARAMS['radial_position'])  # minValue = 0
    radial_width = models.FloatField(default=HEATING_PARAMS['radial_width'])  # minValue = 0

    # Heat source
    nbi_power = models.FloatField(default=HEATING_PARAMS['nbi_power'])
    nbi_radial_position = models.FloatField(default=HEATING_PARAMS['nbi_radial_position'])
    nbi_radial_width = models.FloatField(default=HEATING_PARAMS['nbi_radial_width'])

    icrf_power = models.FloatField(default=HEATING_PARAMS['icrf_power'])
    icrf_radial = models.FloatField(default=HEATING_PARAMS['icrf_radial'])
    icrf_radial_width = models.FloatField(default=HEATING_PARAMS['icrf_radial_width'])

    control_param = models.ForeignKey(ControlParameter, on_delete=models.CASCADE, related_name='heating_params',
                                      related_query_name='heating_params')

    def __str__(self):
        return f"{self.nbi_power} {self.icrf_power}"
