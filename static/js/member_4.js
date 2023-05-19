$(document).ready(function () {
    listing();
});

function listing() {
    fetch('/reply').then((res) => res.json()).then((data) => {
        let rows = JSON.parse(data['result'])
        rows.forEach((a) => {
            let member_id = document.location.href.slice(-1);
            let id = a['id']
            let _id = a['_id']['$oid']
            let name = a['name']
            let comment = a['comment']

            if (id == member_id) {
                let temp_html = `<div class="card">
                                    <div class="card-body">
                                        <blockquote class="blockquote mb-0">
                                            <p>${comment}</p>
                                            <footer class="blockquote-footer">
                                                ${name}
                                            </footer>
                                        </blockquote>
                                        <button onclick="deleting('${_id}')" class="btn btn-outline-dark" type="button" style="float : right">
                                        삭제
                                    </button>
                                    </div>
                                </div>`
                $('#comment-list').append(temp_html)
            }
        })
    })
}

function posting() {
    let id = document.location.href.slice(-1);
    let name = $('#name').val()
    let comment = $('#comment').val()

    let formData = new FormData();
    formData.append("id_give", id);
    formData.append("name_give", name);
    formData.append("comment_give", comment);

    fetch('/reply', { method: "POST", body: formData }).then((res) => res.json()).then((data) => {
        alert(data['msg'])
        window.location.reload()
    })
}

function deleting(b) {
    let formData = new FormData();
    formData.append("_id_give", b);

    fetch('/reply', { method: "DELETE", body: formData }).then((res) =>
        res.json()).then((data) => {
            alert(data['msg'])
            window.location.reload()
        })
}