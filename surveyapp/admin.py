from django.contrib import admin
from .models import Survey, Questions, Choices

# Register your models here.

admin.site.register(Survey)
admin.site.register(Questions)
admin.site.register(Choices)