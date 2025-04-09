
# Speech Synthesis App

A simple web application that converts text to speech using the Web Speech API, with an optional Flask backend to provide dynamic messages. Built as a one-day project to explore speech synthesis capabilities in the browser.

## Features
- **Text-to-Speech**: Type text into a textarea and click "Speak" to hear it aloud.
- **Backend Integration**: Fetch and speak a predefined message from a Flask API with the "Speak Backend Message" button.
- **Clean UI**: Styled with CSS for a user-friendly experience.

## Demo
- Type a message like "Hello, world!" and click "Speak" to hear it.
- Click "Speak Backend Message" to hear "Hello from the Flask backend!"

## Tech Stack
- **Frontend**: HTML, CSS, JavaScript (Web Speech API)
- **Backend**: Python (Flask)

## How to Run

### Prerequisites
- A modern browser (Chrome recommended for full Web Speech API support).
- Python 3.x installed (for the backend).
- Speakers or headphones connected to your device.

### Setup Instructions
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/speech-synthesis-app.git
   cd speech-synthesis-app
   ```

2. **Run the Backend**:
   - Navigate to the project folder (if you separate backend files, adjust accordingly).
   - Install Flask:
     ```bash
     pip install flask
     ```
   - Start the Flask server:
     ```bash
     python app.py
     ```
   - The backend will run on `http://localhost:5000`.

3. **Run the Frontend**:
   - Open `index.html` directly in Chrome, or:
   - Serve it locally to avoid CORS issues:
     ```bash
     python -m http.server 8000
     ```
   - Visit `http://localhost:8000` in your browser.

4. **Test It**:
   - Type text and click "Speak" to hear it.
   - Click "Speak Backend Message" to fetch and speak the backend response.

## Notes
- **Browser Compatibility**: Works best in Chrome due to robust Web Speech API support. Firefox and Safari may have limited functionality.
- **CORS**: If you encounter CORS errors, install `flask-cors` (`pip install flask-cors`) and add `CORS(app)` to `app.py`, or serve the frontend from Flask.
- **Customization**: Modify `script.js` to adjust `volume`, `rate`, or `pitch`, or add voice selection with `speechSynthesis.getVoices()`.



## Credits
- Uses the Web Speech API, a native browser feature.

---

Happy coding, and enjoy your talking app!
```
