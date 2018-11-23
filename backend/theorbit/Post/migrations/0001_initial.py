# -*- coding: utf-8 -*-
# Generated by Django 1.11.9 on 2018-11-21 15:29
from __future__ import unicode_literals

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='GeneralPost',
            fields=[
                ('id', models.BigAutoField(db_index=True, primary_key=True, serialize=False)),
                ('content', models.CharField(blank=True, max_length=500000, null=True)),
                ('title', models.CharField(max_length=150)),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
