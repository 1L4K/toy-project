from flask import Flask, render_template, request, jsonify
from pymongo import MongoClient
import certifi

ca = certifi.where()

client = MongoClient('mongodb+srv://sprta:test@cluster0.dqdfmbj.mongodb.net/?retryWrites=true&w=majority', tlsCAFile=ca)
db = client.dbsparta

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('./index.html')

@app.route('/member/<memberId>')
def member(memberId):
    return render_template(f'./member_{memberId}.html')

@app.route("/reply", methods=["POST"])
def reply_post():
    id_receive = request.form['id_give']
    name_receive = request.form['name_give']
    comment_receive = request.form['comment_give']
    
    doc = {
        'id':id_receive,
        'name':name_receive,
        'comment':comment_receive
    }
    db.replys.insert_one(doc)

    return jsonify({'msg':'댓글 작성완료!'})

@app.route("/reply", methods=["GET"])
def reply_get():
    all_replys = list(db.replys.find({},{'_id':False}))
    return jsonify({'result':all_replys})

if __name__ == '__main__':
    app.run('0.0.0.0', port=5001, debug=True)