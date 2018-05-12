# Generated by Django 2.0.5 on 2018-05-12 05:29

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='HeatingParameter',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('nbi_power', models.FloatField(default=0)),
                ('nbi_radial_position', models.FloatField(default=0)),
                ('nbi_radial_width', models.FloatField(default=0.5)),
                ('icrf_power', models.FloatField(default=0)),
                ('icrf_radial', models.FloatField(default=0)),
                ('icrf_radial_width', models.FloatField(default=0.5)),
            ],
            options={
                'abstract': False,
            },
        ),
    ]
