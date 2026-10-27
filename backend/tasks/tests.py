from django.test import TestCase
from rest_framework.test import APIClient
from .models import Task


class TaskApiRootTests(TestCase):
    def test_api_root_lists_create_and_list_endpoints(self):
        response = APIClient().get("/api/")

        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.data["crear_tarea"]["method"], "POST")
        self.assertEqual(response.data["listar_tareas"]["method"], "GET")
        self.assertTrue(response.data["crear_tarea"]["url"].endswith("/api/tasks/"))
        self.assertTrue(
            response.data["listar_tareas"]["url"].endswith("/api/tasks/list/")
        )

    def test_task_can_be_updated(self):
        task = Task.objects.create(title="Tarea original")

        response = APIClient().patch(
            f"/api/tasks/{task.id}/",
            {"title": "Tarea actualizada", "status": "completada"},
            format="json",
        )

        self.assertEqual(response.status_code, 200)
        task.refresh_from_db()
        self.assertEqual(task.title, "Tarea actualizada")
        self.assertEqual(task.status, "completada")
