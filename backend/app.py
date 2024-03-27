from flask import Flask, request, jsonify,render_template,send_file
from flask_cors import CORS
from generate_certificate import generate_certificate
from flask import Flask, send_from_directory
import os
app = Flask(__name__,template_folder='./template/') 
CORS(app)

@app.route('/')
def home():
    return render_template('index.html')
@app.route('/download', methods=['GET'])
def download_file():
    return send_file("./data/ayush.png",as_attachment=True)
@app.route('/test', methods=['GET'])
def test():
    return "Hello, World!"

@app.route("/generate-certificate",methods=['POST'])
def generate_certificate_api():
    data = request.get_json()
    name = data['name']
    if len(name) > 3:
        generate_certificate(name=name)

    else :
        return jsonify({'error' : "Name Size Should be More to Generate Certificate"})

    absolute_path = os.path.join(app.root_path, 'data', f'{name}.png')
    if os.path.exists(absolute_path):
        response = send_file(absolute_path,as_attachment=True)
        os.remove(absolute_path)
        return response
    else:
        return render_template('error.html'), 404  # Render custom error page


if __name__ == '__main__':
    app.run(debug=True, port=5000)