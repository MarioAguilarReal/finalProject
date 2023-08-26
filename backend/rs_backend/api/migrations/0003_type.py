# Generated by Django 4.2.4 on 2023-08-26 18:56

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_image'),
    ]

    operations = [
        migrations.CreateModel(
            name='Type',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('type', models.CharField(blank=True, default='For Sale', help_text='For Rent or For sale', max_length=50, null=True)),
                ('description', models.TextField(blank=True)),
            ],
        ),
    ]
