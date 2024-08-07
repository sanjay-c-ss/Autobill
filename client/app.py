from pymongo import MongoClient

mongo_server_ip = '192.168.2.21'
client = MongoClient(f'mongodb://{mongo_server_ip}:27017/')
db = client['product_db']
collection = db['products']

data_dict = {"id": 1, "name": "apple", "price": 25, "units": "35", "taken": 2, "payable": 3}

inserted_id = collection.insert_one(data_dict).inserted_id
print(f"Data inserted with ID: {inserted_id}")

cursor = collection.find()
for document in cursor:
    print(document)