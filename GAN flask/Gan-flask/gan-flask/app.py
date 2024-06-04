
from __future__ import division, print_function
import os



# Keras
from keras.models import load_model


# Flask utils
from flask import Flask, redirect, url_for, request, render_template
from werkzeug.utils import secure_filename
from gevent.pywsgi import WSGIServer
from flask_cors import CORS

# Define a flask app


# Define a flask app
app = Flask(__name__)
CORS(app) 
MODEL_PATH = 'best.hdf5'
print("Current Working Directory:", os.getcwd())
print("File Exists:", os.path.exists(MODEL_PATH))
# Load your trained model
print(" ** Model Loading **")
model = load_model(MODEL_PATH)
print(" ** Model Loaded **")




def model_predict(x, model):
    
    preds = model.predict(x)
    d = preds.flatten()
    j = d.max()
   
    return j


@app.route('/')
def index():
    # Main page
    return render_template('index.html')


@app.route('/generate', methods=['GET', 'POST'])
def upload():
    if request.method == 'POST':
     
        text_input = request.form['text_input']
        image = model_predict(text_input, model)
    

                  
        return image
    return None


if __name__ == '__main__':
    app.run(debug=True)
