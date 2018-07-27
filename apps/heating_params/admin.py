from django.contrib import admin

from apps.heating_params.models import HeatingParameter


class HeatingParameterAdmin(admin.ModelAdmin):
    __basic_fields = [
        'id',
        'break_point_number',
        'breakpoint_time',
        'timestep',
        'particle_species',
        'rate_of_particle_source',
        'radial_position',
        'radial_width',
        'nbi_power',
        'nbi_radial_position',
        'nbi_radial_width',
        'icrf_power',
        'icrf_radial',
        'icrf_radial_width',
        'control_param',
        'created_at',
        'updated_at',
    ]
    list_display = __basic_fields
    list_display_links = __basic_fields


admin.site.register(HeatingParameter, HeatingParameterAdmin)
