import json
from functools import wraps
from flask import Flask, jsonify, redirect, request, current_app
app = Flask(__name__)

def support_jsonp(f):
    """Wraps JSONified output for JSONP"""
    @wraps(f)
    def decorated_function(*args, **kwargs):
        callback = request.args.get('callback', False)
        if callback:
            content = str(callback) + '(' + str(f().data) + ')'
            return current_app.response_class(content, mimetype='application/json')
        else:
            return f(*args, **kwargs)
    return decorated_function

# then in your view
@app.route('/test', methods=['GET'])
@support_jsonp
def test():
    data = {
           'incident': 'Kafka is down in uswest1-prod',
           'ticket': 'KAFKA-1022',
           'severity': 'P0',
           'coordinator': 'XYZ',
           'investigator': 'ABC',
           'communicator': 'XYZ',
           'phase': 'active'
        }
    return jsonify(data)

if __name__ == "__main__":
    app.run(debug=True, host='0.0.0.0', port=9999 )
