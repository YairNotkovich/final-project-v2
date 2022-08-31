# Generated by Django 3.2.14 on 2022-08-29 18:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('flight_app', '0007_auto_20220828_1659'),
    ]

    operations = [
        migrations.AddField(
            model_name='flight',
            name='flight_range',
            field=models.ImageField(default=0, upload_to=''),
        ),
        migrations.AlterField(
            model_name='flight',
            name='Departure_time',
            field=models.DateTimeField(null=True),
        ),
        migrations.AlterField(
            model_name='flight',
            name='Landing_time',
            field=models.DateTimeField(null=True),
        ),
        migrations.AlterField(
            model_name='flight',
            name='Remaining_Tickets',
            field=models.IntegerField(default=100),
        ),
    ]