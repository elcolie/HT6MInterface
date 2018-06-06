from __future__ import absolute_import, unicode_literals

import os
import typing

from celery import Celery, shared_task

# set the default Django settings module for the 'celery' program.
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'ht6m.settings')

app = Celery('ht6m')

# Using a string here means the worker doesn't have to serialize
# the configuration object to child processes.
# - namespace='CELERY' means all celery-related configuration keys
#   should have a `CELERY_` prefix.
app.config_from_object('django.conf:settings', namespace='CELERY')

# Load task modules from all registered Django app configs.
app.autodiscover_tasks()


@app.task(bind=True)
def debug_task(self):
    print('Request: {0!r}'.format(self.request))


@shared_task
def debug_mine(a, b):
    print(f"{a+b}")
    return a + b


@shared_task
def basic_simulate(data: typing.Dict):
    return data
