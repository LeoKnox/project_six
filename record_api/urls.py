from django.conf.urls import url
from django.urls import path, include
from .views import (
    RecordListApiView,
    RecordDetailApiView
)

urlpatterns = [
    path('api', RecordListApiview.as_view()),
    path('api/<int:todo_id>/', RecordDetailApiView.as_view()),
]