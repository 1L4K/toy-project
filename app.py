from flask import Flask, render_template, request, jsonify
from pymongo import MongoClient
import certifi
from bson import ObjectId
from bson.json_util import dumps 

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
    all_replys = list(db.replys.find())
    return jsonify({'result': dumps(all_replys)})

@app.route("/reply", methods=["DELETE"])
def reply_delete():
    _id_receive = ObjectId(request.form['_id_give'])
    db.replys.delete_one({"_id": _id_receive})
    return jsonify({'msg':'댓글 삭제완료!'})


@app.route("/board", methods=["POST"])
def board_post():
    name_receive = request.form['name_give']
    comment_receive = request.form['comment_give']
    doc = {
        'name':name_receive,
        'comment':comment_receive
    }
    db.board.insert_one(doc)
    return jsonify({'msg':'댓글 작성완료!'})

@app.route("/board", methods=["GET"])
def board_get():
    all_board = list(db.board.find())
    return jsonify({'result': dumps(all_board)})

@app.route("/board", methods=["DELETE"])
def board_delete():
    _id_receive = ObjectId(request.form['_id_give'])
    db.board.delete_one({"_id": _id_receive})
    return jsonify({'msg':'댓글 삭제완료!'})

if __name__ == '__main__':
    app.run('0.0.0.0', port=5001, debug=True)