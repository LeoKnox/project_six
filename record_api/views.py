from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework import permissions
from .models import Record
from .serializers import RecordSerializer

class RecordDetailApiView(APIView):
    def get(self, request, *arg, **kwargs):
        return Response("Record Detail")

class RecordListApiView(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def get(self, request):
        records = Record.objects.get()
        print("*****", records.query)
        serializer = RecordSerializer(records, many=True)
        return Response(serializer.data,status=status.HTTP_200_OK)