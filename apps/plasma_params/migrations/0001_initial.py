# Generated by Django 2.0.5 on 2018-05-19 08:11

import django.contrib.postgres.fields.jsonb
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='PlasmaParameter',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('nsmax', models.SmallIntegerField(default=2)),
                ('density_eqn', models.FloatField(default=0)),
                ('atomic_no', django.contrib.postgres.fields.jsonb.JSONField(default={'deuterium': 2, 'electron': -1, 'hydrogen': 1, 'tritium': 3})),
                ('charge_no', django.contrib.postgres.fields.jsonb.JSONField(default={'deuterium': 1, 'electron': -1, 'hydrogen': 1, 'tritium': 1})),
                ('density_axis', django.contrib.postgres.fields.jsonb.JSONField(default={'deuterium': 0, 'electron': 0.1, 'hydrogen': 0.1, 'tritium': 0})),
                ('density_surface', django.contrib.postgres.fields.jsonb.JSONField(default={'deuterium': 0, 'electron': 0.01, 'hydrogen': 0.01, 'tritium': 0})),
                ('temperature_axis', django.contrib.postgres.fields.jsonb.JSONField(default={'deuterium': 0, 'electron': 0.5, 'hydrogen': 0.5, 'tritium': 0})),
                ('temperature_surface', django.contrib.postgres.fields.jsonb.JSONField(default={'deuterium': 0, 'electron': 0.01, 'hydrogen': 0.01, 'tritium': 0})),
                ('impurity_no', models.SmallIntegerField(default=0)),
                ('neutral_no', models.SmallIntegerField(default=0)),
                ('particle_source_model', models.SmallIntegerField(default=0)),
                ('number_particle_source', models.SmallIntegerField(default=1)),
                ('particle_source_rate', models.FloatField(default=1.0)),
                ('radial_position', models.FloatField(default=0)),
                ('radial_width', models.FloatField(default=0.5)),
                ('particle_source_species', models.SmallIntegerField(default=2)),
            ],
            options={
                'abstract': False,
            },
        ),
    ]
