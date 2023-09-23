from pymongo import MongoClient

def get_database():
    cluster = MongoClient("mongodb+srv://leznupar:jasminelu1123@cluster0.cfpytk4.mongodb.net/")
    db = cluster["test"]
    collection = db["models"]

    return collection


