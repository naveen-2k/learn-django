from django.db import models

# Create your models here.
class FlamesResult(models.Model):
    name1 = models.CharField(max_length=100)
    name2 = models.CharField(max_length=100)
    result = models.CharField(max_length=10)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.name1} & {self.name2} -> {self.result}"
