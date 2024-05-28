from asgiref.wsgi import WsgiToAsgi

from .main import app

asgi_app = WsgiToAsgi(app)
