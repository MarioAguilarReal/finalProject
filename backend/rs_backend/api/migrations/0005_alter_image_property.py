# Generated by Django 4.2.4 on 2023-10-03 00:57

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0004_property_created_at_property_updated_at'),
    ]

    operations = [
        migrations.AlterField(
            model_name='image',
            name='property',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='images', to='api.property'),
        ),
    ]
