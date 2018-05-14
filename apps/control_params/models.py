from django.db import models

from apps.commons.abstract_classes import AbstractTimestamp
from apps.commons.constants import CONTROL_PARAMS


class ControlParameter(AbstractTimestamp):
    timestep = models.FloatField(default=CONTROL_PARAMS['timestep'])
    mesh_point = models.SmallIntegerField(default=CONTROL_PARAMS['mesh_point'])
    snap_data_print = models.SmallIntegerField(default=CONTROL_PARAMS['snap_data_print'])
    radial_profile_snap = models.SmallIntegerField(default=CONTROL_PARAMS['radial_profile_snap'])
    time_evolution_snap = models.SmallIntegerField(default=CONTROL_PARAMS['time_evolution_snap'])

    def __str__(self):
        return f"{self.timestep} {self.mesh_point}"
