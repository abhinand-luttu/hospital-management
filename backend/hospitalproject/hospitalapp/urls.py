from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import *

router = DefaultRouter()

router.register("patients", PatientView)
router.register("doctors", DoctorView)
router.register("appointments", AppointmentView)
router.register("medical-history", MedicalHistoryViewSet)
router.register("billing", BillingView)
router.register("health-education", HealthEducationViewSet)

urlpatterns = [

# Login APIs
path("patient-login/", patient_login),
path("doctor-login/", doctor_login),
path("admin-login/", admin_login),

# Doctor appointment API
path("doctor-appointments/<int:doctor_id>/", doctor_appointments),
path("doctor-patients/<int:doctor_id>/", doctor_patient),
# Razorpay APIs
path("create-payment-order/", create_payment_order),
path("payment-success/", payment_success),


# Router APIs
path("", include(router.urls)),

]