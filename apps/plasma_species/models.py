from django.db import models

from apps.commons.constants import PARTICLE_SPECIES
from apps.plasma_params.models import PlasmaParameter


class PlasmaSpecie(models.Model):
    name = models.CharField(max_length=15, choices=PARTICLE_SPECIES)
    density_axis = models.FloatField()  # 10^20 cubic meter
    density_surface = models.FloatField()  # 10^20 cubic meter
    temperature_axis = models.FloatField()  # keV
    temperature_surface = models.FloatField()  # keV
    plasma_parameter = models.ForeignKey(PlasmaParameter, related_name='species', related_query_name='species',
                                         on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.name} {self.plasma_parameter}"
