from django.contrib import admin

from apps.plasma_species.models import PlasmaSpecie


class PlasmaSpecieAdmin(admin.ModelAdmin):
    __basic_fields = [
        'name',
        'density_axis',
        'density_surface',
        'temperature_axis',
        'temperature_surface',
        'plasma_parameter',
    ]
    list_display = __basic_fields
    list_display_links = __basic_fields


admin.site.register(PlasmaSpecie, PlasmaSpecieAdmin)
