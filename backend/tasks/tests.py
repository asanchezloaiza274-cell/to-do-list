from django.test import TestCase
from rest_framework.test import APIClient


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
