from flask import Flask, request,jsonify
from flask_cors import CORS 
import util
import os
app = Flask(__name__)
CORS(app)

util.load_saved_artifacts()
@app.route('/get_location_names')
def get_location_names():
    response = jsonify({
        'locations':util.get_location_names()
    })
    response.headers.add('Access-Control-Allow-origin','*')
    return response

@app.route('/predict_home_price',methods =['POST'])
def predict_home_price():
    total_sqft = float(request.form['total_sqft'])
    location = request.form['location']
    bhk = request.form['bhk']
    bath = int(request.form['bath'])

    response = jsonify({
        'estimated_price' :util.get_estimated_price(location,total_sqft,bhk,bath)
    })
    return response

@app.route('/')
def home():
    return "Welcome to the Real Estate Prediction API!"

if __name__ == "__main__":
    print("Python server running")
    app.run(host='0.0.0.0', port=int(os.environ.get('PORT', 10000)))