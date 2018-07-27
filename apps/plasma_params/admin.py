from django.contrib import admin

from apps.plasma_params.models import PlasmaParameter, DensityAndTemperature


class PlasmaParameterAdmin(admin.ModelAdmin):
    __basic_fields = [
        'id',
        'nsmax',
        'density_eqn',
        'created_at',
        'updated_at',
    ]
    list_display = __basic_fields
    list_display_links = __basic_fields


class DensityAndTemperatureAdmin(admin.ModelAdmin):
    __basic_fields = [
        'id',
        'electron',
        'hydrogen',
        'deuterium',
        'tritium',
    ]
    list_display = __basic_fields
    list_display_links = __basic_fields


admin.site.register(PlasmaParameter, PlasmaParameterAdmin)
admin.site.register(DensityAndTemperature, DensityAndTemperatureAdmin)
