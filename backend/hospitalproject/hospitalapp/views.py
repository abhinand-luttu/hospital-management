from django.shortcuts import render
from rest_framework import viewsets, status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.conf import settings
import razorpay
from django.utils.timezone import now
from .models import *
from .serializers import *


# ---------------- LOGIN APIs ---------------- #

@api_view(['POST'])
def patient_login(request):

    email = request.data.get("email")
    password = request.data.get("password")

    try:
        patient = Patient.objects.get(email=email,password=password)

        return Response({
            "status":"success",
            "patient_id":patient.id,
            "name":patient.name
        })

    except Patient.DoesNotExist:
        return Response({"status":"invalid"})


@api_view(['POST'])
def doctor_login(request):

    email = request.data.get("email")
    password = request.data.get("password")

    try:
        doctor = Doctor.objects.get(email=email,password=password)

        return Response({
            "status":"success",
            "doctor_id":doctor.id,
            "name":doctor.name
        })

    except Doctor.DoesNotExist:
        return Response({"status":"invalid"})


@api_view(['POST'])
def admin_login(request):

    username = request.data.get("username")
    password = request.data.get("password")

    if username=="admin" and password=="admin123":
        return Response({"status":"success"})
    else:
        return Response({"status":"invalid"})


# ---------------- CRUD VIEWSETS ---------------- #

class PatientView(viewsets.ModelViewSet):

    queryset = Patient.objects.all()
    serializer_class = PatientSerializers


class DoctorView(viewsets.ModelViewSet):

    queryset = Doctor.objects.all()
    serializer_class = DoctorSerializers


class AppointmentView(viewsets.ModelViewSet):

    queryset = Appointment.objects.all()
    serializer_class = AppointmentSerializers

    def create(self, request, *args, **kwargs):

        doctor_id = request.data.get("doctor")
        date = request.data.get("date")

        # Count appointments for that doctor and date
        count = Appointment.objects.filter(
            doctor_id=doctor_id,
            date=date
        ).count()

        # Limit = 20 patients per day
        if count >= 20:
            return Response(
                {"message": "Appointment slots full for this doctor today"},
                status=status.HTTP_400_BAD_REQUEST
            )

        return super().create(request, *args, **kwargs)


class MedicalHistoryViewSet(viewsets.ModelViewSet):

    queryset = MedicalHistory.objects.all()
    serializer_class = MedicalHistorySerializer

    def get_queryset(self):
        patient_id = self.kwargs.get("patient_id")
        return MedicalHistory.objects.filter(patient_id=patient_id)


class BillingView(viewsets.ModelViewSet):

    queryset = Bill.objects.all()
    serializer_class = BillingSerializers


class HealthEducationViewSet(viewsets.ModelViewSet):

    queryset = HealthEducation.objects.all()
    serializer_class = HealthEducationSerializer


# ---------------- PAYMENT APIs ---------------- #

client = razorpay.Client(
    auth=(settings.RAZORPAY_KEY_ID, settings.RAZORPAY_KEY_SECRET)
)


# Create Payment Order

@api_view(['POST'])
def create_payment_order(request):

    amount = 500 * 100   # 500 rupees (Razorpay uses paise)

    order = client.order.create({
        "amount": amount,
        "currency": "INR",
        "payment_capture": "1"
    })

    return Response({
        "order_id": order["id"],
        "amount": amount,
        "key": settings.RAZORPAY_KEY_ID
    })


# Payment Success

@api_view(['POST'])
def payment_success(request):

    payment_id = request.data.get("payment_id")

    return Response({
        "message": "Payment Successful",
        "payment_id": payment_id
    })


# ---------------- DOCTOR APPOINTMENTS ---------------- #

@api_view(['GET'])
def doctor_appointments(request, doctor_id):

    today = now().date()

    # delete old appointments
    Appointment.objects.filter(date__lt=today).delete()

    appointments = Appointment.objects.filter(doctor_id=doctor_id)

    serializer = AppointmentSerializers(appointments, many=True)

    return Response(serializer.data)
@api_view(['GET'])
def doctor_patient(request,doctor_id):
    appointments=Appointment.objects.filter(doctor_id=doctor_id)
    serializer=AppointmentSerializers(appointments,many=True)
    
    return Response(serializer.data)
@api_view(['POST'])
def admin(request):
    username=request.data.get("username")
    password=request.data.get("password")
    
    if username=="admin" and password=="admin123":
           return Response({"status":"success"})
    else:
        return Response({"status":"invalid"})