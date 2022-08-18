from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework import permissions
from .models import Record
from .serializers import RecordSerializer

class RecordDetailApiView(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def get_object(self, record_id):
        try:
            return Record.objects.get(id=record_id)
        except Record.DoesNotExist:
            return None

    def get(self, request, record_id, *arg, **kwargs):
        records = Record.objects.get(id = record_id)
        serializer = RecordSerializer(records)
        return Response(serializer.data, status=status.HTTP_200_OK)

class RecordListApiView(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def get(self, request, *args, **kwargs):
        records = Record.objects.all()
        serializer = RecordSerializer(records, many=True)
        return Response(serializer.data,status=status.HTTP_200_OK)