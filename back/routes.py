
from flask_restful import Resource, reqparse
from flask import Response, jsonify, request, session
from bson import ObjectId
from flask_cors import cross_origin
from connection_to_dabases import Mongo_connection, Redis_connection

class Created_usuario(Resource):
    def post(self):
        data =  {
            "nombre":request.json['nombre'],
            "email":request.json['email'],
            "pass":request.json['pass']
        }
        print(data['email'])
        #Si no esxiste registralo
        if Mongo_connection.collection.find_one({'email':data['email']}) is None:
            Mongo_connection.collection.insert_one(data)
            return jsonify({
                "nombre":data["nombre"],
                })
            
        return jsonify({"error":"Usuario ya existe"})

class Login(Resource):
    def post(self):
        email = request.json['email']
        password = request.json['pass']

        data = Mongo_connection.collection.find_one({'email':email})

        if data is None:
            return Response("{'error':'Unauthorized'}",status=401, mimetype='application/json')
        if data['email'] != email:
            return Response("{'error':'Unauthorized'}",status=401, mimetype='application/json')
        if data['pass'] != password:
            return Response("{'error':'Unauthorized'}",status=401, mimetype='application/json')
        
        session['user_id'] = str(data['_id']) #Se almacena en la cookies
        print(session['user_id'])
        return jsonify({'id':str(data['_id'])})

class Init_page(Resource):
    def get(self):
        user_id = session.get("user_id") # Recupera el valor almacenado en la cookie
        print(user_id)
        if not user_id:
            return Response("{'error':'Unauthorized'}",status=401, mimetype='application/json')

        user = Mongo_connection.collection.find_one({'_id':ObjectId(user_id)})
        print(user)
        return jsonify({"nombre":user['nombre'], "email":user['email']})