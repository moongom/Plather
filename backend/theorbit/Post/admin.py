from django.contrib import admin
from django import forms

from Post.models import GeneralPost


class PostAdminForm(forms.ModelForm):

    class Meta:
        model = GeneralPost
        fields = [
            'id', 'user', 'title', 'content',
        ]


class GeneralPostAdmin(admin.ModelAdmin):
    form = PostAdminForm


admin.site.register(GeneralPost, GeneralPostAdmin)
# Register your models here.
