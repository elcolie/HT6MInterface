from django.contrib.postgres.fields import JSONField
from django.db import models

from apps.commons.abstract_classes import AbstractTimestamp

NSMAX = 2
DENSITY_EQN = 0
ATOMIC_NO = {
    'electron': -1,
    'hydrogen': 1,
    'deuterium': 2,
    'tritium': 3,
}
CHARGE_NO = {
    'electron': -1,
    'hydrogen': 1,
    'deuterium': 1,
    'tritium': 1,
}
DENSITY_AXIS = {
    'electron': 0.1,
    'hydrogen': 0.1,
    'deuterium': 0,
    'tritium': 0,
}
DENSITY_SURFACE = {
    'electron': 0.01,
    'hydrogen': 0.01,
    'deuterium': 0,
    'tritium': 0,
}
TEMPERATURE_AXIS = {
    'electron': 0.5,
    'hydrogen': 0.5,
    'deuterium': 0,
    'tritium': 0,
}
TEMPERATURE_SURFACE = {
    'electron': 0.01,
    'hydrogen': 0.01,
    'deuterium': 0,
    'tritium': 0,
}
IMPURITY_NO = 0
NEUTRAL_NO = 0
PARTICLE_SOURCE_MODEL = 0
NUMBER_PARTICLE_SOURCE = 1
PARTICLE_SOURCE_RATE = 1.0
RADIAL_POSITION = 0
RADIAL_WIDTH = 0.5
PARTICLE_SOURCE_SPECIES = 2


class PlasmaParameter(AbstractTimestamp):
    nsmax = models.SmallIntegerField(default=NSMAX)
    density_eqn = models.FloatField(default=DENSITY_EQN)
    atomic_no = JSONField(default=ATOMIC_NO)
    charge_no = JSONField(default=CHARGE_NO)
    density_axis = JSONField(default=DENSITY_AXIS)  # 10^20 cubic meter
    density_surface = JSONField(default=DENSITY_SURFACE)  # 10^20 cubic meter
    temperature_axis = JSONField(default=TEMPERATURE_AXIS)  # keV
    temperature_surface = JSONField(default=TEMPERATURE_SURFACE)  # keV
    impurity_no = models.SmallIntegerField(default=IMPURITY_NO)
    neutral_no = models.SmallIntegerField(default=NEUTRAL_NO)
    particle_source_model = models.SmallIntegerField(default=PARTICLE_SOURCE_MODEL)
    number_particle_source = models.SmallIntegerField(default=NUMBER_PARTICLE_SOURCE)
    particle_source_rate = models.FloatField(default=PARTICLE_SOURCE_RATE)
    radial_position = models.FloatField(default=RADIAL_POSITION)
    radial_width = models.FloatField(default=RADIAL_WIDTH)
    particle_source_species = models.SmallIntegerField(default=PARTICLE_SOURCE_SPECIES)

    def __str__(self):
        return f"{self.nsmax} {self.density_eqn}"
