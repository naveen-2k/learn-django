

# Register your models here.
from django.contrib import admin
from .models import FlamesResult

@admin.register(FlamesResult)
class FlamesResultAdmin(admin.ModelAdmin):
    list_display = ('name1', 'name2', 'result', 'created_at')

