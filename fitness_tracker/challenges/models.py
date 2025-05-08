from djongo import models
from django.conf import settings

class Challenge(models.Model):
    name = models.CharField(max_length=255)
    type = models.CharField(max_length=50)  # walking, running, etc.
    goal = models.IntegerField()            # e.g., 10000 (steps)
    duration_days = models.IntegerField()
    eligibility = models.JSONField()        # e.g., {"age_min": 18, "location": "US"}
    created_by = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        indexes = [
            models.Index(fields=['type']),
            models.Index(fields=['created_by']),
        ] 