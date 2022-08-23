from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework import permissions
from django.views.decorators.csrf import csrf_exempt
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
        if not records:
            return Response(
                {"res": "Object with id does not exist"},
                status=status.HTTP_400_BAD_REQUEST
            )
        serializer = RecordSerializer(records)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
    def put(self, request, record_id, *args, **kwargs):
        record_instance = self.get_object(record_id)
        if not record_instance:
            return Response(
                {"res": "Object with record id does not exist"},
                status = status.HTTP_400_BAD_REQUEST
            )
        data = {
            'record': request.data.get('record'),
        }
        serializer = RecordSerializer(instance = record_instance, data=data, partial = True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    def delete(self, request, record_id, *args, **kwargs):
        record_instance = self.get_object(record_id)
        if not record_instance:
            return Response(
                {"res": "Object with record id does nto exist"},
                status=status.HTTP_400_BAD_REQUEST
            )
        record_instance.delete()
        return Response(
            {"res": "Object delted!"},
            status=status.HTTP_200_OK
        )

class RecordListApiView(APIView):
    #permission_classes = [permissions.IsAuthenticated]

    def get(self, request, *args, **kwargs):
        records = Record.objects.all()
        serializer = RecordSerializer(records, many=True)
        return Response(serializer.data,status=status.HTTP_200_OK)
    
    def post(self, request, *args, **kwargs):
        data = {
            'record': request.data.get('record')
        }
        serializer = RecordSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)