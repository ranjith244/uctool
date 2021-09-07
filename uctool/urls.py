from django.urls import path
from . import views
from django.conf.urls import include, url
from .views import *
from rest_framework import routers

urlpatterns = [
    path('', views.home, name='home'),
    #
    # url(r'getRecShowsData/', getRecShowsData.as_view()),
]
