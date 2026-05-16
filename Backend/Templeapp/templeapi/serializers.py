from rest_framework import serializers
from rest_framework.serializers import ModelSerializer
from .models import DevotteeTable,payment_table
class DevotteeSerializer(ModelSerializer):
    class Meta:
        model=DevotteeTable
        fields='__all__'

class payment_serializer(ModelSerializer):
    name = serializers.PrimaryKeyRelatedField(
        queryset=DevotteeTable.objects.all(),
        required=True  # Ensure it's required
    )
  
    class Meta:
        model=payment_table
        fields='__all__'
        read_only_fields = ('amtperacre',)

    def to_representation(self, instance):
        # Return nested devottee data on read
        response = super().to_representation(instance)
        response['name'] = DevotteeSerializer(instance.name).data
       
        return response
    
    def validate_name(self, value):
        if value is None:
            raise serializers.ValidationError("Name/DevotteeTable ID is required")
        return value
        
            
        