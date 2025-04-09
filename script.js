// Target HTML elements
const textInput = document.getElementById('text-input');
const speakBtn = document.getElementById('speak-btn');
const backendBtn = document.getElementById('backend-btn');
const output = document.getElementById('output');

// Speak button: Read user-typed text
speakBtn.addEventListener('click', () => {
    const text = textInput.value.trim();
    if (text) {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'en-US'; // Set language
        utterance.volume = 1;     // 0 to 1
        utterance.rate = 1;       // 0.1 to 10
        utterance.pitch = 1;      // 0 to 2
        window.speechSynthesis.speak(utterance);
        output.textContent = 'Speaking: ' + text;
    } else {
        output.textContent = 'Please enter some text!';
    }
});

// Backend button: Fetch text from Flask and speak it
backendBtn.addEventListener('click', () => {
    fetch('http://localhost:5000/get-text')
        .then(response => response.json())
        .then(data => {
            const text = data.text;
            const utterance = new SpeechSynthesisUtterance(text);
            utterance.lang = 'en-US';
            window.speechSynthesis.speak(utterance);
            output.textContent = 'Speaking from backend: ' + text;
        })
        .catch(error => {
            console.error('Error:', error);
            output.textContent = 'Failed to fetch backend message.';
        });
});