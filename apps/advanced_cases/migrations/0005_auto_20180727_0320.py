# Generated by Django 2.0.7 on 2018-07-27 03:20

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):
    dependencies = [
        ('advanced_cases', '0004_auto_20180727_0316'),
    ]

    operations = [
        migrations.AlterField(
            model_name='advancedcase',
            name='scenario',
            field=models.OneToOneField(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE,
                                       related_name='advanced_case', related_query_name='advanced_case',
                                       to='scenarios.Scenario'),
        ),
    ]
