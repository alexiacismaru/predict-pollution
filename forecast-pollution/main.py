from flask import Flask, jsonify 
from flask_cors import CORS, cross_origin 
import json

with open('clean-data.json') as f:
    envData = json.load(f)

with open('forecasts.json') as f:
    forecasts = json.load(f)

with open('notification.json') as f: 
    notification = json.load(f)

app = Flask(__name__)

@app.route('/get-fetched-data', methods=['GET'])
@cross_origin()
def send_data_to_frontend(): 
    return jsonify(envData) 

@app.route('/get-predictions', methods=['GET'])
@cross_origin()
def send_predictions_to_fronend(): 
    return jsonify(forecasts)

@app.route('/get-notification', methods=['GET'])
@cross_origin()
def send_notification_to_frontend(): 
    return jsonify(notification)

@app.route('/get-fetched-data/<int:id>', methods=['GET'])
@cross_origin()
def get_element_by_id(id):
    env_id = envData[id]
    return jsonify(env_id)

if __name__ == '__main__':
    app.run(debug=True)