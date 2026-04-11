from django.db import models


class Patient(models.Model):
    name=models.CharField(max_length=100)
    email=models.EmailField(unique=True)
    phone=models.CharField(max_length=15)
    password=models.CharField(max_length=100)


class Doctor(models.Model):
    name=models.CharField(max_length=100)
    email=models.EmailField(unique=True)
    specialization=models.CharField(max_length=100)
    username=models.CharField(max_length=50)
    password=models.CharField(max_length=100)


class Appointment(models.Model):
    patient=models.ForeignKey(Patient,on_delete=models.CASCADE)
    doctor=models.ForeignKey(Doctor,on_delete=models.CASCADE)
    date=models.DateField()
    time=models.TimeField()
    status=models.CharField(max_length=20,default="Booked")

class Bill(models.Model):

    patient = models.ForeignKey(Patient,on_delete=models.CASCADE)

    amount = models.IntegerField()

    payment_status = models.CharField(
        max_length=20,
        default="Pending"
    )

    razorpay_payment_id = models.CharField(
        max_length=200,
        null=True,
        blank=True
    )

    created_at = models.DateTimeField(
        auto_now_add=True,
        null=True,
        blank=True
    )

class MedicalHistory(models.Model):
    patient=models.ForeignKey(Patient,on_delete=models.CASCADE)
    diagnosis=models.TextField()
    prescription=models.TextField()
    date = models.DateField()

    def __str__(self):
        return self.diagnosis
class HealthEducation(models.Model):

    title = models.CharField(max_length=200)
    description = models.TextField()      

# Create your models here.
