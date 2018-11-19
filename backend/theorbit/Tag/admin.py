from django.contrib import admin
from Tag.models.models import FilterTagModel, SuperTagModel, PostGlobalTagRelation, PostUserTagRelation
# Register your models here.\

admin.site.register(FilterTagModel)
admin.site.register(SuperTagModel)
admin.site.register(PostGlobalTagRelation)
admin.site.register(PostUserTagRelation)
