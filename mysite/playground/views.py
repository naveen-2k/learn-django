import os
import json
import uuid
from gtts import gTTS
from django.http import JsonResponse, FileResponse
from django.views.decorators.csrf import csrf_exempt
from django.conf import settings
from datetime import datetime
from django.shortcuts import render
import logging

logger = logging.getLogger(__name__)


@csrf_exempt
def generate_audio(request):
    if request.method == 'POST':
        try:
            # Parse request data
            data = json.loads(request.body)
            text = data.get('text', '')
            gender = data.get('gender', 'female')
            accent = data.get('accent', 'en-US')

            logger.debug(f'Received text: {text}')
            logger.debug(f'Selected gender: {gender}')
            logger.debug(f'Selected accent: {accent}')

            # Check if text is empty
            if not text:
                return JsonResponse({'error': 'No text provided.'}, status=400)

            # Generate a unique file name using UUID and timestamp
            unique_id = str(uuid.uuid4())
            timestamp = datetime.now().strftime('%Y%m%d%H%M%S')
            file_name_audio = f"speech_{unique_id}_{timestamp}.mp3"
            file_name_text = f"text_{unique_id}_{timestamp}.txt"

            # Define the directory for storing files
            file_dir = os.path.join('mysite', 'playground', 'static', 'playground', 'assets')
            
            # Ensure the directory exists
            if not os.path.exists(file_dir):
                os.makedirs(file_dir)

            # Define full paths for audio and text files
            file_path_audio = os.path.join(file_dir, file_name_audio)
            file_path_text = os.path.join(file_dir, file_name_text)

            # Write the text content to the text file
            with open(file_path_text, 'w') as f:
                f.write(text)

            # Generate speech using gTTS and save the audio file
            tts = gTTS(text=text, lang=accent)
            tts.save(file_path_audio)

            # Respond with the unique download links for the generated files
            return JsonResponse({
                'audio_url': f'/playground/download_audio/audio/{file_name_audio}/',
                'text_url': f'/playground/download_audio/text/{file_name_text}/'
            })

        except Exception as e:
            return JsonResponse({'error': str(e)}, status=500)

    return JsonResponse({'error': 'Invalid request method.'}, status=405)

def download_audio(request, file_type, file_name):
    # Define the directory for storing files
    file_dir = os.path.join('mysite', 'playground', 'static', 'playground', 'assets')
    
    # Choose the file based on the request
    if file_type == 'audio':
        file_path = os.path.join(file_dir, file_name)
    elif file_type == 'text':
        file_path = os.path.join(file_dir, file_name)
    else:
        return JsonResponse({'error': 'Invalid file type.'}, status=400)

    # Check if the file exists and return it
    if os.path.exists(file_path):
        return FileResponse(open(file_path, 'rb'), as_attachment=True, filename=file_name)
    
    return JsonResponse({'error': 'File not found'}, status=404)




# Create your views here.
def index(request):
    # logger.debug('This is a debug message')
    return render(request,'playground/index.html') 

def txt_ado(request):
    # logger.debug('This is a debug message')
    return render(request,'playground/textado.html')

def editor(request):
    # logger.debug('This is a debug message')
    return render(request,'playground/editor.html')

def adotxt(request):
    # logger.debug('This is a debug message')
    return render(request,'playground/adotxt.html')


