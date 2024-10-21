$(document).ready(function() {
    // Step 1: Generate Audio
    $('#generate-audio').on('click', function() {
        let text = $('#input-text').val();
        let gender = $('#gender').val();
        let accent = $('#accent').val();

        if (text) {
            $.ajax({
                url: '/playground/generate_audio/',
                type: 'POST',
                data: JSON.stringify({
                    text: text,
                    gender: gender,
                    accent: accent
                }),
                contentType: 'application/json',
                success: function(response) {
                    // Update the audio player and show analysis section
                    $('#audio-player').attr('src', response.audio_url);
                    $('#audio-analysis').show();

                    // Analyze the audio using Gemini
                    analyzeAudioWithGemini(response.audio_url);
                },
                error: function(error) {
                    alert('An error occurred: ' + error.responseJSON.error);
                }
            });
        } else {
            alert('Please enter text to generate audio.');
        }
    });

    // Step 2: Analyze Audio with Gemini API
    function analyzeAudioWithGemini(audioUrl) {
        console.log({audioUrl});
        $('#analysis-result').text('Analyzing audio...');
        $.ajax({
            
            url: `https://api.gemini.example.com/analyze?audio=${audioUrl}`,
            method: 'GET',
            headers: {
                'Authorization': 'Bearer AIzaSyDN2evUQ02MdvoC03KNbaHvpe0IpUfwbNw',
            },
            success: function(data) {
                let resultText = '';
                data.prompts.forEach(function(prompt, index) {
                    $('#image-prompts').append(`<div class="prompt">At ${prompt.time}, prompt: "${prompt.text}"</div>`);
                });
            },
            error: function(error) {
                console.log('Error:', error);
                $('#analysis-result').text('Failed to analyze the audio.');
            }
        });
    }

    // Step 3: Proceed to Video Editor
    $('#proceed-to-editor').on('click', function() {
        $('#audio-analysis').hide();
        $('#video-editor').show();
    });

    // Video Editing Buttons
    $('.edit-btn').on('click', function() {
        let action = $(this).attr('id');
        alert(`${action} feature clicked!`);
        // Video editing logic will go here
    });

    // Export Video
    $('#export-video').on('click', function() {
        alert('Exporting video...');
        // Logic to export video
    });
});

$(document).ready(function() {
    const speechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new speechRecognition();
    
    let isListening = false;

    recognition.continuous = true;
    recognition.lang = 'en-US';
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    $('#start-btn').click(function() {
        if (isListening) {
            recognition.stop();
            isListening = false;
            $('#mic-icon').attr('src', 'mic-icon.png'); // Change back to mic off icon
            console.log('Speech recognition has stopped.');
        } else {
            recognition.start();
            isListening = true;
            $('#mic-icon').attr('src', 'mic-on-icon.png'); // Change to mic on icon
            console.log('Listening...');
        }
    });

    recognition.onresult = function(event) {
        const speechResult = event.results[0][0].transcript;
        $('#text-output').val(speechResult);
        console.log('Speech recognized: ' + speechResult);
    };

    recognition.onerror = function(event) {
        console.error('Speech recognition error detected: ' + event.error);
    };

    recognition.onspeechend = function() {
        recognition.stop();
        isListening = false;
        $('#mic-icon').attr('src', 'mic-icon.png'); // Change back to mic off icon
        console.log('Speech recognition has stopped.');
    };
    $('#compliment-button').click(function() {
        console.log("sound");
        const utterance = new SpeechSynthesisUtterance('dont worry visalya , You are doing an amazing job , be strong and  stay positive  ,  advance, happy birthday  , keep smiling ');
        utterance.pitch = 1;   // Set pitch (1 is default, range: 0 to 2)
        utterance.rate = 0.7;    // Set rate (1 is default, range: 0.1 to 10)
        utterance.volume = 1;  // Set volume (1 is default, range: 0 to 1)
        window.speechSynthesis.speak(utterance);
    });
});
