from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework import permissions
from .models import Record
from .serializers import RecordSerializer

class RecordDetailApiView(APIView):
    def get(self, request):
        return ("record_detail")

class RecordListApiView(APIView):
    def get(self, request):
        return("record_list")