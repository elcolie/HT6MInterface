from django.contrib import admin

from apps.control_params.models import ControlParameter


class ControlParameterAdmin(admin.ModelAdmin):
    __basic_fields = [
        'id',
        'no_break_point',
        'max_run_time',
        'created_at',
        'updated_at',
    ]
    list_display = __basic_fields
    list_display_links = __basic_fields


admin.site.register(ControlParameter, ControlParameterAdmin)
