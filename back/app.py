from flask import Flask, session
from connection_to_dabases import Mongo_connection, Redis_connection
from flask_cors import CORS, cross_origin
from flask_session import Session

from flask_restful import Api
from routes import Created_usuario, Login, Init_page

app = Flask(__name__)

cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

api = Api(app)

Mongo_connection()
Redis_connection()

SESSION_TYPE = 'redis'
app.config.from_object(__name__) #Confoguracion de la app
server_session = Session(app)


api.add_resource(Created_usuario, '/register')
api.add_resource(Login, '/login')
api.add_resource(Init_page, '/user')


if __name__ == '__main__':
    app.run(debug=True)