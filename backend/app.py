from flask import Flask, request, jsonify
from flask_cors import CORS
import sqlite3

from utils.matching import find_optimal_match

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})
# CORS(app)


# Business Database setup
# database is businesses.db, table is submissions
conn_business = sqlite3.connect('businesses.db')
c_business = conn_business.cursor()
c_business.execute('''CREATE TABLE IF NOT EXISTS submissions 
             (company_name text, business_sector text, location text, email text, employee_count int)''')
conn_business.commit()
conn_business.close()


# Stock item Database setup
# database is items.db, table is items
conn_items = sqlite3.connect('items.db')
c_items = conn_items.cursor()
c_items.execute('''CREATE TABLE IF NOT EXISTS items 
             (item_name text, quantity int, budget int, notes text)''')
conn_items.commit()
conn_items.close()


@app.route('/BusinessSignUp', methods=['POST'])
def submit_business():
    data = request.get_json()
    app.logger.info(data)

    company_name = data['company_name']
    business_sector = data['business_sector']
    location = data['location']
    email = data['email']
    employee_count = data['employee_count']

    # business form
    conn_business = sqlite3.connect('businesses.db')
    c_business = conn_business.cursor()
    c_business.execute('INSERT INTO submissions VALUES (?, ?, ?, ?, ?)',
                       (company_name, business_sector, location, email, employee_count))
    conn_business.commit()
    conn_business.close()

    response = {'message': 'Form submitted successfully'}
    return jsonify(response), 200


@app.route('/ItemSubmission', methods=['POST'])
def submit_item():
    data = request.get_json()
    app.logger.info(data)

    item_name = data['item_name']
    quantity = data['quantity']
    budget = data['budget']
    notes = data['notes']

    # business form
    conn_items = sqlite3.connect('items.db')
    c_items = conn_items.cursor()
    c_items.execute('INSERT INTO items VALUES (?, ?, ?, ?)',
                    (item_name, quantity, budget, notes))
    conn_items.commit()
    conn_items.close()

    response = {'message': 'Form submitted successfully'}
    return jsonify(response), 200


@app.route('/GetBusinessInfo', methods=['GET'])
def get_business_info():
    company_name = request.args.get('company_name')

    if not company_name:
        return jsonify({"error": "Please provide a company name"}), 400

    conn_business = sqlite3.connect('businesses.db')
    c_business = conn_business.cursor()
    c_business.execute(
        'SELECT * FROM submissions WHERE company_name = ?', (company_name,))
    result = c_business.fetchone()
    conn_business.close()

    if result:
        keys = ["company_name", "business_sector",
                "location", "email", "employee_count"]
        business_data = dict(zip(keys, result))
        return jsonify(business_data), 200
    else:
        return jsonify({"error": "Company not found"}), 404


@app.route('/FindOptimalMatch', methods=['POST'])
def get_optimal_match():
    data = request.get_json()
    app.logger.info(data)

    match = find_optimal_match(data)

    if match:
        response = jsonify({
            "message": "Match found!",
            "match": match
        })
        response.headers['Access-Control-Allow-Origin'] = '*'
        return response, 200
    else:
        response = jsonify({"message": "No match found."})
        response.headers['Access-Control-Allow-Origin'] = '*'
        return response, 200


# @app.route('/call_paybilt_api', methods=['POST'])
# def call_paybilt_api():
#      data = {
#         "customerEmail": "test@paybilt.com",
#         "firstname": "John",
#         "lastname": "Smith",
#         "address": "123 Main Street West",
#         "city": "Toronto",
#         "state": "Ontario",
#         "country": "CA",
#         "zip_code": "M5M 5M5",
#         "phone": "14165551234",
#         "currency": "CAD",
#         "udf1": "H6MsQARmAnj2cv48",
#         "amount_shipping": "2",
#         "totalPrice": "19.23",
#         "sid": "12",
#         "token": "EncryptedBearerToken",
#         "ntf_url": "Your_notification_URL",
#         "return_url": "Your_return_URL"
#     }

#     # Encrypt the Bearer Token
#     def aes_encrypt(data, key, iv):
#         return CryptoJS.AES.encrypt(data, CryptoJS.enc.Utf8.parse(key), {
#             iv: CryptoJS.enc.Utf8.parse(iv),
#             padding: CryptoJS.pad.Pkcs7,
#             mode: CryptoJS.mode.CBC
#         }).toString()

#     encrypted_token = aes_encrypt(data['token'], 'YourSecretKey', 'Your16CharUdf1')

#     # Make the API call
#     # You can use the requests library or any other HTTP library of your choice
#     # Here's an example using the requests library
#     import requests
#     response = requests.post('https://your-api-url.com/endpoint', json={**data, "token": encrypted_token})

#     # Handle the API response
#     if response.status_code == 200:
#         api_response = response.json()
#         return jsonify(api_response)
#     else:
#         return jsonify({"error": "Failed to call Paybilt API"}), 500


@app.route('/GetMostRecentBusiness', methods=['GET'])
def get_most_recent_business():
    conn_business = sqlite3.connect('businesses.db')
    c_business = conn_business.cursor()

    # Get the most recent company name
    c_business.execute(
        'SELECT company_name FROM submissions ORDER BY rowid DESC LIMIT 1')
    result = c_business.fetchone()
    conn_business.close()

    if result:
        return jsonify({"company_name": result[0]}), 200
    else:
        return jsonify({"error": "No company found"}), 404



if __name__ == '__main__':
    app.run(debug=True)
