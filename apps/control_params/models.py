from django.db import models

from apps.commons.abstract_classes import AbstractTimestamp

TIMESTEP = 0.01
MESH_POINT = 50
SNAP_DATA_PRINT = 10
RADIAL_PROFILE_SNAP = 100
TIME_EVOLUTION_SNAP = 2


class ControlParameter(AbstractTimestamp):
    timestep = models.FloatField(default=TIMESTEP)
    mesh_point = models.SmallIntegerField(default=MESH_POINT)
    snap_data_print = models.SmallIntegerField(default=SNAP_DATA_PRINT)
    radial_profile_snap = models.SmallIntegerField(default=RADIAL_PROFILE_SNAP)
    time_evolution_snap = models.SmallIntegerField(default=TIME_EVOLUTION_SNAP)

    def __str__(self):
        return f"{self.timestep} {self.mesh_point}"
