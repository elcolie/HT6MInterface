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
def fortran_simulate(data: typing.Dict):
    """Basic ControlRoom simulator start computing here"""
    from apps.scenarios.models import Scenario
    scenario = Scenario.objects.get(id=data.get('scenario'))
    import os
    os.makedirs(f'{scenario.id}')
    temp1 = f"echo 'this is fortran call' > ./{scenario.id}/rt1.txt"
    temp2 = f"echo 'this is fortran call' > ./{scenario.id}/rt2.txt"
    os.system(temp1)
    os.system(temp2)
    '''
    # To create `Result` record
    from django.core.files import File
    my_first_file = open(f'1/rt1.txt', 'rb')
    Result.objects.create(scenario=scenario, output=File(my_first_file))
    '''

    return data
