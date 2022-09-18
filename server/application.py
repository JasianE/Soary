import math
import flask
from djitellopy import Tello
import time
import math

app = flask.Flask(__name__)
app.config["DEBUG"] = True


@app.route("/api/v1/kill", methods=["POST"])
def kill():
    tello = Tello()
    time.sleep(1.5)
    tello.connect()
    time.sleep(1)
    tello.land()


@app.route("/api/v1/move", methods=["POST"])
def move():
    """
    //real
    get pharmacy coordinates from server
    flask server will serve flight info to drone
    we are happy :D

    """
    ##recieve data from server.js
    # request_data = flask.request.get_json()
    # lat = request_data['latitude']
    # long = request_data['longitude']
    # #get long lat data form database

    request_data = flask.request.get_json()
    lat = request_data["latitiude"]
    long = request_data["longitude"]
    destination = request_data["destination"]
    coords = [lat, long]

    # initialize and takeoff drone
    tello = Tello()
    time.sleep(3)
    tello.connect()
    time.sleep(3)
    tello.takeoff()
    supplier_loc = [0, 0]

    # form a right triangle, find opp and adj for trig
    opp = int(coords[0]) - int(supplier_loc[0])
    adj = int(coords[1]) - int(supplier_loc[1])

    # find takeoff angle
    takeoff_angle = math.floor(math.degrees(math.atan(int(opp) / int(adj))))

    # turn and move to position , then land
    time.sleep(3)
    tello.rotate_counter_clockwise(takeoff_angle)
    time.sleep(3)
    dist = math.floor(math.sqrt(opp**2 + adj**2))
    tello.move_forward(dist)
    print(takeoff_angle)
    print(math.sqrt(math.floor(opp**2 + adj**2)))
    time.sleep(3)
    tello.land()
    tello.emergency()

    return flask.jsonify(
        {"message": "drone succesfully deployed to", "destination": destination}, 201
    )


# run the application
app.run()
# pushed
