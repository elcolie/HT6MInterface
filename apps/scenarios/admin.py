from django.contrib import admin

from apps.scenarios.models import Scenario


class ScenarioAdmin(admin.ModelAdmin):
    __basic_fields = [
        'id',
        'device_params',
        'plasma_params',
        'density_temp_params',
        'transport_params',
        'control_params',
        'comment',
        'created_by',
        'created_at',
    ]
    list_display = __basic_fields
    list_display_links = __basic_fields


admin.site.register(Scenario, ScenarioAdmin)
