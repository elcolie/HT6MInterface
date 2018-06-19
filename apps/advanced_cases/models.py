from django.contrib.auth import get_user_model
from django.db import models

from apps.commons.abstract_classes import AbstractTimestamp

User = get_user_model()


class AdvancedCase(AbstractTimestamp):
    file = models.FileField(upload_to='advanced_files')
    comment = models.CharField(max_length=255, null=True, blank=True)
    created_by = models.ForeignKey(User, related_name='advanced_cases', related_query_name='advanced_cases',
                                   on_delete=models.SET_NULL, null=True, blank=True)

    def __str__(self):
        return f"{self.comment}[:10]"
