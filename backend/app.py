from flask import Flask, request, jsonify
from flask_cors import CORS
import sqlite3

from utils.matching import find_optimal_match

app = Flask(__name__)
# CORS(app)
CORS(app, resources={r"/*": {"origins": "*"}})


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
        return jsonify({
            "message": "Match found!",
            "match": match
        }), 200
    else:
        return jsonify({"message": "No match found."}), 200


if __name__ == '__main__':
    app.run(debug=True)
