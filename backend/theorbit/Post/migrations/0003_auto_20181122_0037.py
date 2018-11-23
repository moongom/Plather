# -*- coding: utf-8 -*-
# Generated by Django 1.11.9 on 2018-11-21 15:37
from __future__ import unicode_literals

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('Post', '0002_generalpost_last_edit_date'),
    ]

    operations = [
        migrations.AddField(
            model_name='generalpost',
            name='did_date',
            field=models.DateTimeField(default=django.utils.timezone.now),
        ),
        migrations.AddField(
            model_name='generalpost',
            name='pub_date',
            field=models.DateTimeField(default=django.utils.timezone.now),
        ),
    ]