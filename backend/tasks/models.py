from django.db import models

# Create your models here.
class Task(models.Model):

    class Category(models.TextChoices):
        HOGAR = "home", "Hogar"
        OCIO = "leisure", "Ocio"

    title = models.CharField(max_length=500)
    completed = models.BooleanField(default=False)
    deleted = models.BooleanField(default=False)
    category = models.CharField(
        max_length=10, choices=Category.choices, default=Category.HOGAR
    )
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ["-created_at"]

    def __str__(self):
        return self.title
