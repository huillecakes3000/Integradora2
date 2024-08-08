from flask import Flask, jsonify, request, send_from_directory
from flask_pymongo import PyMongo
from flask_cors import CORS
from flask_jwt_extended import JWTManager, create_access_token, jwt_required, get_jwt_identity
from flask_bcrypt import Bcrypt
from werkzeug.utils import secure_filename
import os
from bson import ObjectId

app = Flask(__name__)
CORS(app, resources={r"/api/*": {"origins": "http://localhost:8100"}})

app.config['MONGO_URI'] = "mongodb+srv://guille:eltaz1234@cluster0.x3lxgft.mongodb.net/smartground?retryWrites=true&w=majority"
app.config['UPLOAD_FOLDER'] = 'uploads'
os.makedirs(app.config['UPLOAD_FOLDER'], exist_ok=True)

app.config['JWT_SECRET_KEY'] = 'SMARTGROWN'
mongo = PyMongo(app)
bcrypt = Bcrypt(app)
jwt = JWTManager(app)

@app.after_request
def after_request(response):
    response.headers.add('Access-Control-Allow-Origin', 'http://localhost:8100')
    response.headers.add('Access-Control-Allow-Headers', 'Content-Type,Authorization')
    response.headers.add('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    return response

@app.route('/api/upload_profile_pic', methods=['POST'])
@jwt_required()
def upload_profile_pic():
    if 'file' not in request.files:
        return jsonify({'error': 'No file part'}), 400

    file = request.files['file']
    if file.filename == '':
        return jsonify({'error': 'No selected file'}), 400

    filename = secure_filename(file.filename)
    file_path = os.path.join(app.config['UPLOAD_FOLDER'], filename)
    file.save(file_path)

    user_id = get_jwt_identity()
    mongo.db.users.update_one({'_id': ObjectId(user_id)}, {'$set': {'profile_pic': filename}})

    return jsonify({'message': 'File uploaded successfully', 'file_path': file_path}), 200

@app.route('/api/edit_profile_pic', methods=['POST'])
@jwt_required()
def edit_profile_pic():
    # Llama a la función de carga de archivo para reemplazar la imagen actual
    return upload_profile_pic()

@app.route('/api/delete_profile_pic', methods=['DELETE'])
@jwt_required()
def delete_profile_pic():
    user_id = get_jwt_identity()
    user = mongo.db.users.find_one({'_id': ObjectId(user_id)})
    if user and 'profile_pic' in user:
        filename = user['profile_pic']
        file_path = os.path.join(app.config['UPLOAD_FOLDER'], filename)
        if os.path.exists(file_path):
            os.remove(file_path)
            mongo.db.users.update_one({'_id': ObjectId(user_id)}, {'$unset': {'profile_pic': ''}})
            return jsonify({'message': 'Profile picture deleted successfully'}), 200
        return jsonify({'error': 'File not found'}), 404
    return jsonify({'error': 'No profile picture found'}), 404

@app.route('/uploads/<filename>', methods=['GET'])
def get_uploaded_file(filename):
    return send_from_directory(app.config['UPLOAD_FOLDER'], filename)

@app.route('/api/login', methods=['POST'])
def login():
    username = request.json.get('username')
    password = request.json.get('password')

    user = mongo.db.users.find_one({'username': username})

    if user and bcrypt.check_password_hash(user['password'], password):
        usuario_id = str(user['_id'])
        access_token = create_access_token(identity=usuario_id)
        return jsonify({'access_token': access_token, 'user_id': usuario_id}), 200
    else:
        return jsonify({'error': 'Credenciales inválidas'}), 401

@app.route('/api/registro', methods=['POST'])
def registro():
    nombrecompleto = request.json.get('nombrecompleto')
    username = request.json.get('username')
    password = request.json.get('password')
    email = request.json.get('email')

    hashed_password = bcrypt.generate_password_hash(password).decode('utf-8')

    if mongo.db.users.find_one({'username': username}):
        return jsonify({'error': 'El nombre de usuario ya está en uso'}), 400

    new_user = {
        'fullname': nombrecompleto,
        'username': username,
        'password': hashed_password,
        'email': email
    }

    result = mongo.db.users.insert_one(new_user)
    return jsonify({'message': 'Usuario registrado correctamente'}), 201

@app.route('/datos_Humedad', methods=['GET'])
def get_humedad():
    sensor = mongo.db.sensores.find_one(sort=[('_id', -1)])
    if sensor and 'humedad' in sensor:
        return jsonify({'datos': sensor['humedad']}), 200
    return jsonify({'error': 'No se encontraron datos de humedad'}), 404

@app.route('/datos_Temperatura', methods=['GET'])
def get_temperatura():
    sensor = mongo.db.sensores.find_one(sort=[('_id', -1)])
    if sensor and 'temperatura' in sensor:
        return jsonify({'datos': sensor['temperatura']}), 200
    return jsonify({'error': 'No se encontraron datos de temperatura'}), 404

if __name__ == '__main__':
    app.run(debug=True)
