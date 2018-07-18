from django.db import models
from rest_framework import serializers


class AbstractTimestamp(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        abstract = True


# Because it is 4 by 4 then I have decided to go by particle type
# Rather than `quantities`. In the future add H4 particle is easy.
# Just add the new model to it
class AbstractSpecie(models.Model):
    density_of_center = models.FloatField(default=0)
    density_of_edge = models.FloatField(default=0)
    temp_at_center = models.FloatField(default=0)
    temp_at_edge = models.FloatField(default=0)

    class Meta:
        abstract = True


class AbstractSpecieSerializer(serializers.ModelSerializer):
    class Meta:
        fields = [
            'id',
            'density_of_center',
            'density_of_edge',
            'temp_at_center',
            'temp_at_edge',
        ]
