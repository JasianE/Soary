import math
import flask
import pymongo
import time
from djitellopy import Tello

app = flask.Flask(__name__)
app.config["DEBUG"] = True

# write an app route called /api/v1/deploy
@app.route("/api/v1/deploy", methods=["POST"])
def deploy_drone():
    request_data = flask.request.get_json()
    lat = request_data["latitude"]
    long = request_data["longitude"]
    coords = [lat, long]
    tello = Tello()
    time.sleep(3)
    tello.connect()
    time.sleep(3)
    tello.takeoff()
    time.sleep(3)
    telloLocation = [0, 0]
    opp = coords[1] - telloLocation[1]
    adj = coords[0] - telloLocation[0]
    angle = math.floor(math.atan(opp / adj))
    time.sleep(3)
    tello.rotate_clockwise(angle)
    time.sleep(3)
    tello.move_forward(math.floor(math.sqrt(opp**2 + adj**2)))
    time.sleep(3)
    tello.land()
    return flask.jsonify({"message": "drone deployed successfully"})


# run the application
app.run()
