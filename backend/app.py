from flask import Flask, request, jsonify
from flask_cors import CORS
import sqlite3

app = Flask(__name__)
# CORS(app)  
CORS(app, resources={r"/*": {"origins": "*"}})


# Business Database setup
conn_business = sqlite3.connect('businesses.db')  # database is businesses.db, table is submissions
c_business = conn_business.cursor()
c_business.execute('''CREATE TABLE IF NOT EXISTS submissions 
             (company_name text, business_sector text, location text, email text, employee_count int)''')
conn_business.commit()
conn_business.close()


# Stock item Database setup
conn_items = sqlite3.connect('items.db')  # database is items.db, table is items
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
    c_business.execute('INSERT INTO submissions VALUES (?, ?, ?, ?, ?)', (company_name, business_sector, location, email, employee_count))
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
    c_items.execute('INSERT INTO items VALUES (?, ?, ?, ?)', (item_name, quantity, budget, notes))
    conn_items.commit()
    conn_items.close()

    response = {'message': 'Form submitted successfully'}
    return jsonify(response), 200


if __name__ == '__main__':
    app.run(debug=True)
