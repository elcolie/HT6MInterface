from django.contrib import admin

from apps.advanced_cases.models import AdvancedCase


class AdvancedCaseAdmin(admin.ModelAdmin):
    list_display = ['id', 'file', 'comment', 'created_by', 'created_at', 'updated_at']
    search_fields = ['comment', 'created_by__username']


admin.site.register(AdvancedCase, AdvancedCaseAdmin)
