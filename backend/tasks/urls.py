from django.urls import path
from .views import TaskApiRootView, TaskCreateView, TaskListView

urlpatterns = [
    path("", TaskApiRootView.as_view(), name="api-root"),
    path("tasks/", TaskCreateView.as_view(), name="task-create"),
    path("tasks/list/", TaskListView.as_view(), name="task-list"),
]