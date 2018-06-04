from django.db import models

from apps.commons.abstract_classes import AbstractTimestamp
from apps.commons.constants import PLASMA_PARAMS


class PlasmaParameter(AbstractTimestamp):
    nsmax = models.SmallIntegerField(default=PLASMA_PARAMS['nsmax'])  # Number of ion species
    density_eqn = models.BooleanField(default=PLASMA_PARAMS['density_eqn'])

    def __str__(self):
        return f"{self.nsmax} {self.density_eqn}"
