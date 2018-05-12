from django.contrib.postgres.fields import JSONField
from django.db import models

from apps.commons.utils import AbstractTimestamp


class PlasmaParameter(AbstractTimestamp):
    nsmax = models.SmallIntegerField(default=2)
    density_eqn = models.FloatField(default=0)
    atomic_no = JSONField(default={
        'electron': -1,
        'hydrogen': 1,
        'deuterium': 2,
        'tritium': 3,
    })
    charge_no = JSONField(default={
        'electron': -1,
        'hydrogen': 1,
        'deuterium': 1,
        'tritium': 1,
    })
    density_axis = JSONField(default={
        'electron': 0.1,
        'hydrogen': 0.1,
        'deuterium': 0,
        'tritium': 0,
    })  # 10^20 cubic meter
    density_surface = JSONField(default={
        'electron': 0.01,
        'hydrogen': 0.01,
        'deuterium': 0,
        'tritium': 0,
    })  # 10^20 cubic meter
    temperature_axis = JSONField(default={
        'electron': 0.5,
        'hydrogen': 0.5,
        'deuterium': 0,
        'tritium': 0,
    })  # keV
    temperature_surface = JSONField(default={
        'electron': 0.01,
        'hydrogen': 0.01,
        'deuterium': 0,
        'tritium': 0,
    })  # keV
    impurity_no = models.SmallIntegerField(default=0)
    neutral_no = models.SmallIntegerField(default=0)
    particle_source_model = models.SmallIntegerField(default=0)
    number_particle_source = models.SmallIntegerField(default=1)
    particle_source_rate = models.FloatField(default=1.0)
    radial_position = models.FloatField(default=0)
    radial_width = models.FloatField(default=0.5)
    particle_source_species = models.SmallIntegerField(default=2)

    def __str__(self):
        return f"{self.nsmax} {self.density_eqn}"
