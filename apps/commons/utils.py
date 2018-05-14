import django_rq

from apps.scenarios.models import Scenario

READONLY_FIELDS = ['id', 'created_at', 'updated_at', 'created_at', 'updated_at']


def get_ls(scenario):
    """rqworker execution is here"""
    from pprint import pprint
    pprint(vars(scenario))


def call_fortran(scenario: Scenario):
    django_rq.enqueue(get_ls, scenario)
