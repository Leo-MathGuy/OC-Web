# How to contribute

## Guidelines for Python

* Use black for formatting please
* Create a venv `python3 -m venv venv` `source venv/bin/activate` and install deps `pip install -r requirements.txt`

## Guidelines for pages

* Use sass and tailwind, launch the corresponding scripts to watch files
* Images as webp

[Figma Link](https://www.figma.com/design/zmH7BDM1CIoqbfE5FyP3o3/Main-Page?node-id=0-1&t=l5gFmo4JciSH0Vq8-0)

## To host in development

Commands will be for Linux sorry if you are windows

### Server

In debug mode, will auto-refresh:

```bash
python3 app.py
```

### SASS

Needed to edit .scss files, will watch and compile everything in `webapp/css/*.scss` to `webapp/static/css/\<respective name\>.css`

NOTE: Needs sass to be installed as a command

```bash
./launchSass.sh
```

### Tailwind

Needed for the html files, will watch and autogenerate needed classes in html templates, and `webapp/css/tw.css` `@apply`'s to `webapp/static/css/tw.css`

NOTE: Needs node, npm, and tailwind to be installed

```bash
./launchTailwind.sh
```

## Hosting in production

Python frameworks like Flask use a WSGI (Gateway Interface). An ASGI (Async) server will be used

To run with hypercorn:

```bash
hypercorn webapp.asgi:asgi_app
```
