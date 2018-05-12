from django.db import models


class AbstractTimestamp(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        abstract = True


READONLY_FIELDS = ['id', 'created_at', 'updated_at', 'created_at', 'updated_at']
