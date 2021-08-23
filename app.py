from flask import Flask, render_template

app = Flask(__name__)

#on load
@app.route('/')
def home():
    return render_template("index.html")

#run application
if __name__ == '__main__':
    app.run()
