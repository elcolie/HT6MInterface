import django_rq

from apps.scenarios.models import Scenario, Result

READONLY_FIELDS = ['id', 'created_at', 'updated_at', 'created_at', 'updated_at']


def get_ls(scenario):
    """rqworker execution is here"""
    from pprint import pprint
    # Fortran
    # Check error
    # EOF Check error

    # https://docs.djangoproject.com/en/2.1/ref/models/querysets/#django.db.models.query.QuerySet.bulk_create
    # Start writing to database
    # Result.objects.bulk_create([
    #     Result(scenario=scenario,
    #            filename='my_name',
    #            output=File(),
    #            passed=True),
    #     Result(scenario=scenario,
    #            filename='my_name',
    #            output=File(),
    #            passed=True),
    # ])
    pprint(vars(scenario))


def call_fortran(scenario: Scenario):
    django_rq.enqueue(get_ls, scenario)
