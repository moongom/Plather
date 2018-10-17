# -*- coding: utf-8 -*-
# Generated by Django 1.11.16 on 2018-10-16 12:22
from __future__ import unicode_literals

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('Post', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='FilterTagModel',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255, unique=True)),
                ('slug', models.SlugField()),
            ],
            options={
                'ordering': ('name',),
            },
        ),
        migrations.CreateModel(
            name='PostGlobalTagRelation',
            fields=[
                ('id', models.BigAutoField(db_index=True, primary_key=True, serialize=False)),
                ('filter_tag', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='Tag.FilterTagModel')),
                ('post', models.ForeignKey(db_index=False, on_delete=django.db.models.deletion.CASCADE, to='Post.GeneralPost')),
            ],
        ),
        migrations.CreateModel(
            name='PostUserTagRelation',
            fields=[
                ('id', models.BigAutoField(db_index=True, primary_key=True, serialize=False)),
                ('filter_tag', models.ForeignKey(db_index=False, null=True, on_delete=django.db.models.deletion.CASCADE, to='Tag.FilterTagModel')),
                ('post', models.ForeignKey(db_index=False, on_delete=django.db.models.deletion.CASCADE, to='Post.GeneralPost')),
            ],
        ),
        migrations.CreateModel(
            name='SuperTagModel',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255, unique=True)),
                ('slug', models.SlugField()),
            ],
            options={
                'ordering': ('name',),
            },
        ),
        migrations.AlterUniqueTogether(
            name='supertagmodel',
            unique_together=set([('slug',)]),
        ),
        migrations.AddField(
            model_name='postusertagrelation',
            name='super_tag',
            field=models.ForeignKey(db_index=False, null=True, on_delete=django.db.models.deletion.CASCADE, to='Tag.SuperTagModel'),
        ),
        migrations.AddField(
            model_name='postusertagrelation',
            name='user',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL),
        ),
        migrations.AddField(
            model_name='postglobaltagrelation',
            name='super_tag',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='Tag.SuperTagModel'),
        ),
        migrations.AlterUniqueTogether(
            name='filtertagmodel',
            unique_together=set([('slug',)]),
        ),
        migrations.AlterUniqueTogether(
            name='postusertagrelation',
            unique_together=set([('filter_tag', 'super_tag', 'post')]),
        ),
        migrations.AlterUniqueTogether(
            name='postglobaltagrelation',
            unique_together=set([('filter_tag', 'super_tag', 'post')]),
        ),
    ]
