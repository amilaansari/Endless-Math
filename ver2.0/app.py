from flask import Flask, render_template
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

#on load
@app.route('/')
def home():
    return render_template("index.html")

#run application
if __name__ == '__main__':
    app.run()
