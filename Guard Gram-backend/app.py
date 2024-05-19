from flask import Flask, request, jsonify, session, redirect, url_for
import joblib
import pandas as pd
from flask_cors import CORS
from pymongo import MongoClient
import bcrypt
import smtplib
import random
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText


# Load the model and scaler
model = joblib.load('account_classifier.joblib')
scaler = joblib.load('scaler.joblib')

app = Flask(__name__)
app.secret_key = b'_5#y2L"F4Q8z\n\xec]/'
# Add CORS
CORS(app)

# Connect to MongoDB
client = MongoClient('mongodb+srv://admin:123@cluster0.kk405fg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
db = client['test']
collection = db['users']

@app.route('/predict', methods=['POST'])
def predict():
    # Get the JSON data sent to the Flask app
    data = request.get_json(force=True)
    
    # Convert JSON data to DataFrame
    input_data = pd.DataFrame([data])
    
    # Scale the input data
    scaled_data = scaler.transform(input_data)
    
    # Make prediction
    prediction = model.predict(scaled_data)
    
    # Convert prediction to meaningful response
    response = "real" if prediction[0] == 0 else "fake"
    
    # Return the response as JSON
    return jsonify({"prediction": response})

@app.route('/register', methods=['POST'])
def register():
    # Get the JSON data sent to the Flask app
    data = request.get_json(force=True)
    
    # Hash the password
    hashed_password = bcrypt.hashpw(data['password'].encode('utf-8'), bcrypt.gensalt())
    
    # Replace the plain password with the hashed one
    data['password'] = hashed_password
    
    # Insert user data into MongoDB
    collection.insert_one(data)
    
    # Return success message
    return jsonify({"message": "User registered successfully!"})

from bson import ObjectId

@app.route('/login', methods=['POST'])
def login():
    data = request.get_json(force=True)
    
   
    user = collection.find_one({"email": data['email']})
    
    if user and bcrypt.checkpw(data['password'].encode('utf-8'), user['password']):
        return jsonify({"message": "Login successful"})
    else:
        return jsonify({"message": "Invalid email or password"}), 401


@app.route('/logout')
def logout():
    # Clear session
    session.clear()
    return redirect(url_for('index'))

EMAIL = 'tokenrek@gmail.com'
PASSWORD = 'cmpu mpdf dytk dbyl'  # This is the app password

@app.route('/forget', methods=['POST'])
def forget_password():
    data = request.get_json()
    email = data.get('email')

    # Generate a random number (6 digits)
    random_number = ''.join([str(random.randint(0, 9)) for _ in range(6)])

    # Email content
    message = f"Your verification code is: {random_number}"

    # Send email
    try:
        # Connect to Gmail's SMTP server
        server = smtplib.SMTP_SSL('smtp.gmail.com', 465)
        server.login(EMAIL, PASSWORD)

        # Create message container
        msg = MIMEMultipart()
        msg['From'] = EMAIL
        msg['To'] = email
        msg['Subject'] = 'Password Reset Verification Code'

        # Add message body
        msg.attach(MIMEText(message, 'plain'))

        # Send email
        server.sendmail(EMAIL, email, msg.as_string())

        # Close SMTP connection
        server.quit()

        return jsonify({"message": "Verification code sent successfully" , "code": random_number})
    except Exception as e:
        return jsonify({"message": f"Failed to send verification code: {str(e)}"}), 500
#change password api
@app.route('/change', methods=['POST'])
def change_password():
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')
    # Hash the password
    hashed_password = bcrypt.hashpw(password.encode('utf-8'), bcrypt.gensalt())
    collection.update_one({"email": email}, {"$set": {"password": hashed_password}})
    return jsonify({"message": "Password changed successfully"})
@app.route('/feedback', methods=['POST'])
def add_feedback():
    # Get the JSON data sent to the Flask app
    print(request)
    data = request.get_json()
    print(data)
    feedbackCollection = db['feedbacks']
    # Extract feedback data
    feedback_data = data.get('feedbackData')
    input_data = data.get('input')

    # Insert feedback data into MongoDB
    feedbackCollection.insert_one({
        'input': input_data,
        'feedbackData': feedback_data
    })

    # Return success message
    return jsonify({"message": "Feedback added successfully!"})


if __name__ == '__main__':
    app.run(debug=True)
