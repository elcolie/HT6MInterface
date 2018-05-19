# Generated by Django 2.0.5 on 2018-05-19 08:11

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('plasma_params', '0001_initial'),
        ('device_params', '0001_initial'),
        ('transport_params', '0001_initial'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('control_params', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Result',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('filename', models.CharField(max_length=255)),
                ('output', models.FileField(upload_to='outputs')),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='Scenario',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('control_params', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='scenarios', related_query_name='scenarios', to='control_params.ControlParameter')),
                ('created_by', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='scenarios', related_query_name='scenarios', to=settings.AUTH_USER_MODEL)),
                ('device_params', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='scenarios', related_query_name='scenarios', to='device_params.DeviceParameter')),
                ('plasma_params', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='scenarios', related_query_name='scenarios', to='plasma_params.PlasmaParameter')),
                ('transport_params', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='scenarios', related_query_name='scenarios', to='transport_params.TransportParameter')),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.AddField(
            model_name='result',
            name='scenario',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='results', related_query_name='results', to='scenarios.Scenario'),
        ),
    ]
