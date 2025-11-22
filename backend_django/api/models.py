from django.db import models

class Report(models.Model):
    description = models.TextField()
    latitude = models.FloatField()
    longitude = models.FloatField()
    predicted = models.CharField(max_length=128, blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Report {self.id} - {self.predicted}"