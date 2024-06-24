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

from flask import Flask, render_template, send_file, g
from sqlalchemy import create_engine
from sqlalchemy.orm import scoped_session, sessionmaker, declarative_base

app = Flask(__name__, static_url_path="/static/")

HARDCODES = {
    "projectName": "Open Kosmos",
    "discordLink": "https://discord.gg/DaPXNFpdXF",
}


def rend_templ(template_name, *args, **kwargs):
    return render_template(template_name, *args, **HARDCODES, **kwargs)


# region Database

## The code below is totally mine and I did not copy them from the official flask documentation tutorial, trust me ok 100% legit


DATABASE = "./db.sqlite3"
engine = create_engine(f"sqlite:///{DATABASE}")
db_session = scoped_session(
    sessionmaker(autocommit=False, autoflush=False, bind=engine)
)
Base = declarative_base()
Base.query = db_session.query_property()


def get_user_data(name: str) -> dict:
    pass


# endregion


@app.route("/")
def index_page():
    return rend_templ("pages/index.html", title=f"{HARDCODES['projectName']}!")


@app.route("/favicon.ico")
def favicon():
    return send_file(
        app.root_path + "/static/favicon.ico"
    )  # Should be the ONLY manually made static file, TRUST!!!


if __name__ == "__main__":
    app.run(debug=True, port=8080)
