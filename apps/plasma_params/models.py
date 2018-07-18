from django.db import models

from apps.commons.abstract_classes import AbstractTimestamp, AbstractSpecie
from apps.commons.constants import PLASMA_PARAMS


class Electron(AbstractSpecie):
    pass


class Hydrogen(AbstractSpecie):
    pass


class Deuterium(AbstractSpecie):
    pass


class Tritium(AbstractSpecie):
    pass


class PlasmaParameter(AbstractTimestamp):
    nsmax = models.SmallIntegerField(default=PLASMA_PARAMS['nsmax'])  # Number of ion species
    density_eqn = models.BooleanField(default=PLASMA_PARAMS['density_eqn'])

    def __str__(self):
        return f"{self.nsmax} {self.density_eqn}"


class DensityAndTemperature(models.Model):
    electron = models.ForeignKey(Electron, on_delete=models.CASCADE)
    hydrogen = models.ForeignKey(Hydrogen, on_delete=models.CASCADE)
    deuterium = models.ForeignKey(Deuterium, on_delete=models.CASCADE, null=True, blank=True)
    tritium = models.ForeignKey(Tritium, on_delete=models.CASCADE, null=True, blank=True)

    def __str__(self):
        return f"{self.electron} {self.hydrogen} {self.deuterium} {self.tritium}"
