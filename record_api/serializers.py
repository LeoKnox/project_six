 from rest_framework import serializers
 from .models import Record

 class TodoSerializer(serializers.ModelSerializer):
     class Meta:
         model = Record
         fields = ["record"]