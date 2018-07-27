from django.contrib import admin

from apps.device_params.models import DeviceParameter


class DeviceParameterAdmin(admin.ModelAdmin):
    __basic_fields = [
        'id',
        'machine',
        'major_radius',
        'minor_radius',
        'triangularity',
        'ellipticity',
        'plasma_current',
        'magnetic_field',
        'created_at',
        'updated_at',
    ]
    list_display = __basic_fields
    list_display_links = __basic_fields


admin.site.register(DeviceParameter, DeviceParameterAdmin)
