
from flask_restful import Resource, reqparse
from flask import jsonify, request, session
from bson import ObjectId

from connection_to_dabases import Mongo_connection, Redis_connection

class Created_usuario(Resource):
    def post(self):
        data =  {
            "nombre":request.json['nombre'],
            "email":request.json['email'],
            "pass":request.json['pass']
        }
        Mongo_connection.collection.insert_one(data)

        return jsonify({
            "nombre":data["nombre"],
            })

class Login(Resource):
    def post(self):
        email = request.json['email']
        password = request.json['pass']

        data = Mongo_connection.collection.find_one({'email':email})
        print(data)
        if data is None:
            return (jsonify({"error":"Unauthorized"}))
        
        session['user_id'] = str(data['_id']) #Se almacena en la cookies
        return jsonify({'id':str(data['_id'])})