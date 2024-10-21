from django.urls import path
from . import views

urlpatterns = [
    path('index/', views.index),
    path('txt-ado/', views.txt_ado),
    path('generate_audio/', views.generate_audio),
    path('download_audio/<str:file_type>/<str:file_name>/', views.download_audio),
    path('editor/', views.editor),
    path('adotxt/', views.adotxt),
    
    # Add more paths for other pages as needed
]
