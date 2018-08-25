from django.contrib import admin
from Tag.models.models import FilterTagModel, SuperTagModel, GlobalTagRelation, UserTagRelation
# Register your models here.\

admin.site.register(FilterTagModel)
admin.site.register(SuperTagModel)
admin.site.register(GlobalTagRelation)
admin.site.register(UserTagRelation)
