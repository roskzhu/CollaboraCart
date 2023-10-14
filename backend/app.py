from flask import Flask, request, jsonify
from flask_cors import CORS
import sqlite3

app = Flask(__name__)
CORS(app)  


# Database setup
conn = sqlite3.connect('businesses.db')  # database is businesses.db, table is submissions
c = conn.cursor()
c.execute('''CREATE TABLE IF NOT EXISTS submissions 
             (company_name text, business_sector text, location text, email text, employee_count int)''')
conn.commit()
conn.close()


@app.route('/BusinessSignUp', methods=['POST'])
def submit_form():
    data = request.get_json()
    app.logger.info(data)

    company_name = data['company_name']
    business_sector = data['business_sector']
    location = data['location']
    email = data['email']
    employee_count = data['employee_count']

    conn = sqlite3.connect('businesses.db')
    c = conn.cursor()
    c.execute('INSERT INTO submissions VALUES (?, ?, ?, ?, ?)', (company_name, business_sector, location, email, employee_count))
    conn.commit()
    conn.close()

    response = {'message': 'Form submitted successfully'}
    return jsonify(response), 200


if __name__ == '__main__':
    app.run(debug=True)
