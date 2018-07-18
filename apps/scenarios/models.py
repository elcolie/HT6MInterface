from django.contrib.auth.models import User
from django.db import models

from apps.commons.abstract_classes import AbstractTimestamp
from apps.control_params.models import ControlParameter
from apps.device_params.models import DeviceParameter
from apps.plasma_params.models import PlasmaParameter, DensityAndTemperature
from apps.transport_params.models import TransportParameter


class Scenario(AbstractTimestamp):
    device_params = models.ForeignKey(DeviceParameter, on_delete=models.CASCADE, related_name='scenarios',
                                      related_query_name='scenarios')
    plasma_params = models.ForeignKey(PlasmaParameter, on_delete=models.CASCADE, related_name='scenarios',
                                      related_query_name='scenarios')
    density_temp_params = models.ForeignKey(DensityAndTemperature, on_delete=models.CASCADE,
                                            related_name='densities_and_temperatures',
                                            related_query_name='density_and_temperature')
    transport_params = models.ForeignKey(TransportParameter, on_delete=models.CASCADE, related_name='scenarios',
                                         related_query_name='scenarios')
    control_params = models.ForeignKey(ControlParameter, on_delete=models.CASCADE, related_name='scenarios',
                                       related_query_name='scenarios')
    comment = models.TextField()
    created_by = models.ForeignKey(User, on_delete=models.CASCADE, related_name='scenarios',
                                   related_query_name='scenarios')

    def __str__(self):
        return f"{self.id} {self.device_params}"

    def state(self) -> str:
        result = self.results.first()
        if result is None:
            return 'Running'
        else:
            return 'Complete' if result.passed else 'Error'
