# Generated by Django 2.0.6 on 2018-06-24 05:32

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('scenarios', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='result',
            name='filename',
        ),
    ]
