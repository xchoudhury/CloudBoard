# Generated by Django 2.0.1 on 2018-04-12 20:52

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('cloudboard', '0011_auto_20180412_1229'),
    ]

    operations = [
        migrations.AlterField(
            model_name='snippet',
            name='file',
            field=models.FileField(blank=True, null=True, upload_to=''),
        ),
        migrations.AlterField(
            model_name='snippet',
            name='text',
            field=models.TextField(blank=True, null=True),
        ),
    ]
