# Coded by Sayana Veliyil Renny (C0753753)
from pymongo import MongoClient
client = MongoClient("mongodb+srv://Sayana:Enterprise123@cluster0.mtc90.mongodb.net/CoffeeShop?retryWrites=true&w=majority")
db = client.CoffeeShop
collection = db.menu.find()
for item in collection:
     print(item)