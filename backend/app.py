import sqlite3

from flask import Flask, request, jsonify
from flask_cors import CORS
import requests

from utils.matching import find_optimal_match

app = Flask(__name__)
cors = CORS(app, resources={r"/api/*": {"origins": "*"}})
CORS(app)

PAYBILT_API_URL = "https://sandbox.pp.paybilt.com/api/v2/payment/eTransfer/"  # The Paybilt API URL for the sandbox environment


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


@app.route('/GetLatestBusiness', methods=['GET'])
def get_latest_business():
    conn_business = sqlite3.connect('businesses.db')
    c_business = conn_business.cursor()

    # Get the most recent business data
    c_business.execute(
        'SELECT * FROM submissions ORDER BY rowid DESC LIMIT 1')
    result = c_business.fetchone()
    conn_business.close()

    if result:
        keys = ["company_name", "business_sector",
                "location", "email", "employee_count"]
        business_data = dict(zip(keys, result))
        return jsonify(business_data), 200
    else:
        return jsonify({"error": "No business found"}), 404


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


@app.route('/paybilt/api/v2/payment/OnlineBanking', methods=['POST'])
def call_paybilt_api():
    data = request.get_json()
    # app.logger.info(data)
    print(data)

    # Process the data and interact with the Paybilt API
    headers = {
        "accept": "application/json",
        "Content-Type": "application/json",
        "Authorization": f"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySWQiOiI2NDQ5MWY2MjdjM2FhZWQ2ZDg3OTA4MGUiLCJFbnYiOiJzYW5kYm94IiwiQ3JlYXRlRGF0ZVRpbWUiOiIyMDIzLTEwLTEzIDE2OjI3OjIwLjAxNTg5MSIsIkhhc1Nlc3Npb25UaW1lT3V0IjpmYWxzZSwiU2Vzc2lvblRpbWVJbkhvdXJzIjo0MzgwMCwiU2l0ZUlkIjoxODQsImlhdCI6MTY5NzIxNDQ0MCwiZXhwIjoxODU0ODk0NDQwLCJpc3MiOiJNZXJjaGFudEFwaSBJc3N1ZXIiLCJhdWQiOiJNZXJjaGFudEFwaSJ9.dJP2h4BcQbyq1GSes1S5x7C0TS41LEXg-vap_6Ousp8"
    }   

    # Make a POST request to the Paybilt API
    try: 
        response = requests.post(PAYBILT_API_URL, json=data, headers=headers)
        print(response.text)

        # Handle the API response
        if response.status_code == 200:
            api_response = response.json()
            return jsonify(api_response), 200
        else:
            return jsonify({"error": "Internal Server Error"}), 500
    except Exception as e:
        return jsonify({"error": str(e)}), 500


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
    app.run(host='127.0.0.1', port=5000)