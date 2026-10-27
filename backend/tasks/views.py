from rest_framework import generics
from rest_framework.response import Response
from rest_framework.reverse import reverse
from rest_framework.views import APIView
from .models import Task
from .serializers import TaskSerializer


class TaskApiRootView(APIView):
    def get(self, request):
        return Response(
            {
                "crear_tarea": {
                    "url": reverse("task-create", request=request),
                    "method": "POST",
                },
                "listar_tareas": {
                    "url": reverse("task-list", request=request),
                    "method": "GET",
                },
            }
        )


class TaskCreateView(generics.CreateAPIView):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer


class TaskDetailView(generics.RetrieveUpdateAPIView):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer


class TaskListView(generics.ListAPIView):
    queryset = Task.objects.exclude(status=Task.Status.ELIMINADA)
    serializer_class = TaskSerializer