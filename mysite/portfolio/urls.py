from django.urls import path
from . import views

urlpatterns = [
    path('index/', views.index),
    path('cresume/', views.cresume),
    path('resume/', views.resume),
    path('resume1/', views.resume1),
    path('projects/', views.projects),
    path('gallery/', views.gallery),
    path('contact/', views.contact),
    path('contacts/', views.contact_list, name='contact_list'),
    path('self-info/', views.self_info_view, name='self_info'),
]   
