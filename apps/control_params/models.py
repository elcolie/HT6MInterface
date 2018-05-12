from django.contrib.auth.models import User
from django.db import models

from apps.commons.utils import AbstractTimestamp


class ControlParameter(AbstractTimestamp):
    timestep = models.FloatField(default=0.01)
    mesh_point = models.SmallIntegerField(default=50)
    snap_data_print = models.SmallIntegerField(default=10)
    radial_profile_snap = models.SmallIntegerField(default=100)
    time_evolution_snap = models.SmallIntegerField(default=2)
    created_by = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, blank=True,
                                   related_name='created_control_params',
                                   related_query_name='created_control_params')

    def __str__(self):
        return f"{self.timestep} {self.mesh_point}"
