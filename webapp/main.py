from flask import Flask, render_template

app = Flask(__name__, static_url_path="/static/")


@app.route("/")
def index_page():
    return render_template("pages/index.html", title="Open Cosmos!")


if __name__ == "__main__":
    app.run(debug=True, port=8080)
