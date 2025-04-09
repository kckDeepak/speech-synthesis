from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


@app.route('/get-text', methods=['GET'])
def get_text():
    # Simple hardcoded response (you can expand this)
    response = {"text": "Hello from the Flask backend!"}
    return jsonify(response)

if __name__ == '__main__':
    app.run(debug=True, host='localhost', port=5000)