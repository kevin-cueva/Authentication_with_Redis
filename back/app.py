from flask import Flask
from connection_to_dabases import Mongo_connection
from flask_cors import CORS, cross_origin

app = Flask(__name__)

cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

Mongo_connection()

if __name__ == '__main__':
    app.run(debug=True)