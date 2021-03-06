# Generated by Django 2.0.7 on 2018-07-18 17:06

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('plasma_params', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='DensityAndTemperature',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
            ],
        ),
        migrations.CreateModel(
            name='Deuterium',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('density_of_center', models.FloatField(default=0)),
                ('density_of_edge', models.FloatField(default=0)),
                ('temp_at_center', models.FloatField(default=0)),
                ('temp_at_edge', models.FloatField(default=0)),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='Electron',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('density_of_center', models.FloatField(default=0)),
                ('density_of_edge', models.FloatField(default=0)),
                ('temp_at_center', models.FloatField(default=0)),
                ('temp_at_edge', models.FloatField(default=0)),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='Hydrogen',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('density_of_center', models.FloatField(default=0)),
                ('density_of_edge', models.FloatField(default=0)),
                ('temp_at_center', models.FloatField(default=0)),
                ('temp_at_edge', models.FloatField(default=0)),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='Tritium',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('density_of_center', models.FloatField(default=0)),
                ('density_of_edge', models.FloatField(default=0)),
                ('temp_at_center', models.FloatField(default=0)),
                ('temp_at_edge', models.FloatField(default=0)),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.AddField(
            model_name='densityandtemperature',
            name='deuterium',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='plasma_params.Deuterium'),
        ),
        migrations.AddField(
            model_name='densityandtemperature',
            name='electron',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='plasma_params.Electron'),
        ),
        migrations.AddField(
            model_name='densityandtemperature',
            name='hydrogen',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='plasma_params.Hydrogen'),
        ),
        migrations.AddField(
            model_name='densityandtemperature',
            name='tritium',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='plasma_params.Tritium'),
        ),
    ]
