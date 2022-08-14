from django.db import models
from django.contrib.auth.models import User

class Record(models.Model):
    record = models.CharField(max_length = 180)

    def __str__(self):
        return self.task