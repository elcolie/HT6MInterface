# Generated by Django 2.0.5 on 2018-06-04 07:20

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='ControlParameter',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('no_break_point', models.PositiveSmallIntegerField(default=2)),
                ('max_run_time', models.PositiveIntegerField(default=3)),
            ],
            options={
                'abstract': False,
            },
        ),
    ]
