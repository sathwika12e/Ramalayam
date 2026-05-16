from django.urls import path
from . import views
urlpatterns=[
    path('devottee/',views.devottedetails.as_view()),
    path('paymentdetails/',views.payment_details_api.as_view())
]