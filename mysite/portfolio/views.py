from django.shortcuts import render
from .models import Contact, SelfInfo 

# Create your views here.
def index(request):
    return render(request, 'portfolio/index.html')

def cresume(request):
    # Get the screen width from the request
    screen_width = request.GET.get('screen_width')

    # Decide the template based on screen width
    if screen_width and int(screen_width) > 1300:
        response_url = '/portfolio/resume1/'  # URL for desktop version
    else:
        response_url = '/portfolio/resume/'   # URL for mobile version

    # Return the URL in JSON format
    return JsonResponse({'url': response_url})

def resume(request):
    return render(request, 'portfolio/resume.html')
def resume1(request):
    return render(request, 'portfolio/resume1.html')

# Suggested code may be subject to a license. Learn more: ~LicenseLog:2414545605.
def projects(request):
    return render(request, 'portfolio/projects.html')

def gallery(request):
    return render(request, 'portfolio/gallery.html')

def contact(request):
    return render(request, 'portfolio/contact.html')

# Example view to display Contact model data
def contact_list(request):
    contacts = Contact.objects.all()  # Fetch all contact entries
    return render(request, 'portfolio/contact_list.html', {'contacts': contacts})

# Example view to display SelfInfo model data
def self_info_view(request):
    self_info = SelfInfo.objects.all()  # Fetch all self info entries
    return render(request, 'portfolio/self_info.html', {'self_info': self_info})