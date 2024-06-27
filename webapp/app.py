"""    
    Open Cosmos Website - Website for the Open Cosmos Source-Available Community Spaceflight Sim, based on KSP
    Copyright (C) 2024, OC Community

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU Affero General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Affero General Public License for more details.

    You should have received a copy of the GNU Affero General Public License
    along with this program.  If not, see <https://wwwp.gnu.org/licenses/>.
"""

from flask import Flask, redirect, render_template, request, send_file, Response, g
from json import dumps, loads

import schema
import sqlite3 as sql
import bcrypt

app = Flask(__name__, static_url_path="/static/")
app.url_map.strict_slashes = False

HARDCODES = {
    "projectName": "Open Kosmos",
    "discordLink": "https://discord.gg/DaPXNFpdXF",
}

DATABASE = "./db.sqlite3"


def rend_templ(template_name: str, *args, **kwargs):
    return render_template(template_name, *args, **HARDCODES, **kwargs)


def rend_page(
    template_name: str, title: str = HARDCODES["projectName"], *args, **kwargs
):
    return rend_templ("pages/" + template_name, title=title, *args, **kwargs)


# region Database

## The four database functions below are totally mine and I did not copy them from the official flask documentation tutorial, trust me ok 100% legit


def get_db():
    db = getattr(g, "_database", None)
    if db is None:
        db = g._database = sql.connect(DATABASE)
    return db


def query_db(query, args=(), one=False):
    cur = get_db().execute(query, args)
    rv = cur.fetchall()
    cur.close()
    return (rv[0] if rv else None) if one else rv


def init_db():
    with app.app_context():
        db = get_db()
        with app.open_resource("schema.sql", mode="r") as f:
            db.cursor().executescript(f.read())
        db.commit()


@app.teardown_appcontext
def close_connection(exception):
    db = getattr(g, "_database", None)
    if db is not None:
        db.close()


## DB Functions. Will not work through console, only with app context (when app is running)


def get_users() -> list:
    return query_db("SELECT * FROM User;")


def get_user_data_by_username(username: str) -> dict:
    users = query_db(f"SELECT * FROM User WHERE username={username};")


# endregion


@app.route("/")
def index_page():
    return rend_page("index.html")


@app.route("/favicon.ico")
def favicon():
    return send_file(
        app.root_path + "/static/favicon.ico"
    )  # Should be the ONLY manually made static file, TRUST!!!


# region auth


@app.route("/login")
def login_page():
    return rend_page("auth/login.html", "Login")


@app.route("/signup")
def signup_page():
    return rend_page("auth/signup.html", "Signup")


@app.route("/api/client/checkuser")
def check_user():

    if not (u := request.args.get("user")):  # Walrus my beloved
        return Response("<h1>Malformed Request</h1>", status=400)

    users = get_users()

    print(users)
    return Response(
        str(
            int(
                u.lower()
                in list(map(lambda x: x[schema.USER.index("username")].lower(), users))
            )
        ),
        status=200,
    )


# endregion

if __name__ == "__main__":
    app.run(debug=True, port=8080)
