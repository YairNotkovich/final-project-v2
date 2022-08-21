# Generated by Django 3.2.14 on 2022-08-08 11:56

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('flight_app', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='flightroute',
            name='distance',
            field=models.IntegerField(default=0),
        ),
        migrations.AlterField(
            model_name='userprofile',
            name='Role',
            field=models.ForeignKey(default=2, null=True, on_delete=django.db.models.deletion.CASCADE, to='flight_app.user_role'),
        ),
    ]