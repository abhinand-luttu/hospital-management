from django.contrib import admin
from .models import Patient,Doctor,Appointment,MedicalHistory,Bill,HealthEducation

admin.site.register(Patient)
admin.site.register(Doctor)
admin.site.register(Appointment)
admin.site.register(MedicalHistory)
admin.site.register(Bill)
admin.site.register(HealthEducation)