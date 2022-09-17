import flask
import pymongo

app = flask.Flask(__name__)
app.config["DEBUG"] = True


client = pymongo.MongoClient(
    "mongodb+srv://esambald:Yj39ual8lXxmwUd4@cluster0.swylr9h.mongodb.net/?retryWrites=true&w=majority"
)
db = client.test


# write a post method to create a new "drone supplier user" with fields email, password, first name, last name, drone model
@app.route("/api/v1/users", methods=["POST"])
def create_user():
    request_data = flask.request.get_json()
    email = request_data["email"]
    password = request_data["password"]
    first_name = request_data["first_name"]
    last_name = request_data["last_name"]
    drone_model = request_data["drone_model"]
    # create a new user
    supplier = db.supplier  # collection name
    user = {
        "email": email,
        "password": password,
        "first_name": first_name,
        "last_name": last_name,
        "drone_model": drone_model,
        "home": "",  # gps coordinates
    }
    supplier.insert_one(
        {
            "email": email,
            "password": password,
            "first_name": first_name,
            "last_name": last_name,
            "drone_model": drone_model,
        }
    )
    return flask.jsonify({"message": "user created successfully", "user": user}), 201


# run the application
app.run()
