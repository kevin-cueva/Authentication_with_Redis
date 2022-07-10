from multiprocessing import connection
import pymongo
import redis

#environment variable bookstore
from dotenv import load_dotenv
from os import environ

class Mongo_connection:

    load_dotenv()
     
    client = pymongo.MongoClient(f'''mongodb://{str(environ.get('IP_MONGO_CONNECTION'))}:{str(environ.get('PORT_MONGO'))}''') #local connections
    db = client['Login_Redis'] #creating name of database
    collection = db['users'] #Creating name of collection

class Redis_connection:
    user = redis.StrictRedis(host="localhost", 
                            port=6379, 
                            charset="utf-8", 
                            decode_responses=True) # local connection
    
    def login_user(name, email, password):
        pass
    