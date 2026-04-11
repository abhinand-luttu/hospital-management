from rest_framework import serializers
from .models import *

class PatientSerializers(serializers.ModelSerializer):
    class Meta:
        model=Patient
        fields='__all__'
class DoctorSerializers(serializers.ModelSerializer):
    class Meta:
        model=Doctor
        fields='__all__'
class AppointmentSerializers(serializers.ModelSerializer):
    class Meta:
        model=Appointment
        fields='__all__' 


class MedicalHistorySerializer(serializers.ModelSerializer):

    class Meta:
        model = MedicalHistory
        fields = '__all__'         
class BillingSerializers(serializers.ModelSerializer):
    class Meta:
        model=Bill
        fields='__all__'
 
class HealthEducationSerializer(serializers.ModelSerializer):

    class Meta:
        model = HealthEducation
        fields = '__all__'             
        