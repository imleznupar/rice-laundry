from pymongo_get_database import get_database
dbname = get_database()

def create(id, college, type, status):
    post = {"id":id,"college":college,"type":type,"status":status}
    dbname.insert_one(post)

def update_status(id, college, new_status):
    dbname.update_one({"id":id,"college":college},{"$set":{"status":new_status}})

def get_machine(college, type):
    return dbname.find({"college":college,"type":type})


# create(1,"Hanszen","washer",0)
# update_status(0,1)
for x in get_machine("Hanszen"):
    print(x)
# print(x in for get_machine("Hanszen"))
