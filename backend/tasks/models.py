from django.db import models

# Create your models here.
class Task(models.Model):

    class Category(models.TextChoices):
        HOGAR = "hogar", "Hogar"
        OCIO = "ocio", "Ocio"

    class Status(models.TextChoices):
        PENDIENTE = "pendiente", "Pendiente"
        COMPLETADA = "completada", "Completada"
        ELIMINADA = "eliminada", "Eliminada"

    title = models.CharField(max_length=500)
    status = models.CharField(
        max_length=10, choices=Status.choices, default=Status.PENDIENTE
    )
    category = models.CharField(
        max_length=10, choices=Category.choices, default=Category.HOGAR
    )
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ["-created_at"]

    def __str__(self):
        return self.title
