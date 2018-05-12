from django.contrib.auth.models import User
from django.db import models

from apps.commons.utils import AbstractTimestamp
from apps.control_params.models import ControlParameter
from apps.device_params.models import DeviceParameter
from apps.heating_params.models import HeatingParameter
from apps.plasma_params.models import PlasmaParameter
from apps.transport_params.models import TransportParameter


class Scenario(AbstractTimestamp):
    device_params = models.ForeignKey(DeviceParameter, on_delete=models.CASCADE, related_name='scenarios',
                                      related_query_name='scenarios')
    plasma_params = models.ForeignKey(PlasmaParameter, on_delete=models.CASCADE, related_name='scenarios',
                                      related_query_name='scenarios')
    transport_params = models.ForeignKey(TransportParameter, on_delete=models.CASCADE, related_name='scenarios',
                                         related_query_name='scenarios')
    control_params = models.ForeignKey(ControlParameter, on_delete=models.CASCADE, related_name='scenarios',
                                       related_query_name='scenarios')
    heating_params = models.ForeignKey(HeatingParameter, on_delete=models.CASCADE, related_name='scenarios',
                                       related_query_name='scenarios')
    created_by = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, blank=True,
                                   related_name='created_scenario_params',
                                   related_query_name='created_scenario_params')
    updated_by = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, blank=True,
                                   related_name='updated_scenario_params',
                                   related_query_name='updated_scenario_params')

    def __str__(self):
        return f"{self.device_params} {self.heating_params}"
