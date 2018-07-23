from django.contrib import admin

from apps.results.models import Result


class ResultAdmin(admin.ModelAdmin):
    __basic_fields = ['id', 'scenario', 'output', 'passed', 'created_at', 'updated_at']
    list_display = __basic_fields
    list_display_links = __basic_fields
    search_fields = ['id', 'scenario']


admin.site.register(Result, ResultAdmin)
