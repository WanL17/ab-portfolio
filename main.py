import socket

from flask import Flask, render_template

app = Flask(__name__)


def find_free_port(start=5001, end=5010):
    for port in range(start, end + 1):
        with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as sock:
            try:
                sock.bind(('127.0.0.1', port))
                return port
            except OSError:
                continue
    raise RuntimeError(f'Aucun port libre entre {start} et {end}')

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/projects')
def projects():
    return render_template('projects.html')

@app.route('/contact')
def contact():
    return render_template('contact.html')

@app.route('/about')
def about():
    return render_template('about.html')

if __name__ == '__main__':
    port = find_free_port()
    print(f'\n  → Ouvrir http://127.0.0.1:{port}')
    print('  → Routes : /, /projects, /contact, /about\n')
    app.run(debug=True, port=port, use_reloader=True)
