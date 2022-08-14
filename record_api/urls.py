from django.conf.urls import url
from django.urls import path, include
from .views import (
    RecordListApiView,
    RecordDetailApiView
)

urlpatterns = [
    path('api/', RecordListApiView.as_view()),
    path('api/<int:record_id>/', RecordDetailApiView.as_view()),
]