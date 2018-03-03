from flask import Flask, request, render_template, jsonify

app = Flask(__name__)


@app.route('/', methods=['GET', 'POST'])
def hello_world():
    if request.method == 'GET':
        return render_template('hello.html')
    else:
        data = request.get_json()
        f = open('workfile.txt', 'w')
        # f.write("{data.get('R')}")
        f.write(f"{data.get('big_radius')}")
        f.close()

        var_R = int(data.get("big_radius"))
        var_r = int(data.get("small_radius"))
        output = {
            "R": var_R,
            "r": var_r,
            "sum": var_R + var_r
        }
        return jsonify(output)
