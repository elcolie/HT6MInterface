# Generated by Django 2.0.7 on 2018-07-23 07:08

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):
    dependencies = [
        ('scenarios', '0005_auto_20180718_1757'),
        ('advanced_cases', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='advancedcase',
            name='scenario',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE,
                                    related_name='scenarios', related_query_name='scenario', to='scenarios.Scenario'),
        ),
    ]
