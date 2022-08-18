from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework import permissions
from .models import Record
from .serializers import RecordSerializer

class RecordDetailApiView(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def get_object(self, record_id, user_id):
        try:
            return Record.objects.get(id=record_id, user = user_id)
        except Record.DoesNotExist:
            return None

    def get(self, request, *arg, **kwargs):
        record_instance = self.get_object(id, request.user.id)
        if not record_instance:
            return Response(
                {"res": "object with record id does not exist"},
                status = status.HTTP_400_BAD_REQUEST
            )

            serializer = RecordSerializer(record_instance)
            return Response(serializer.data, status=status.HTTP_200_OK)

class RecordListApiView(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def get(self, request, *args, **kwargs):
        records = Record.objects.all()
        print("ddd",records[0].record)
        serializer = RecordSerializer(records, many=True)
        return Response(serializer.data,status=status.HTTP_200_OK)