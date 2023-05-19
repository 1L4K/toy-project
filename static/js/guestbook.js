$(document).ready(function () {
    listing();
});

const listing = () => {
    fetch('/board').then((res) => res.json()).then((data) => {
        let rows = JSON.parse(data['result'])
        rows.forEach((a) => {
            let _id = a['_id']['$oid']
            let name = a['name']
            let comment = a['comment']

            let temp_html = `<tr>
                                <td>${name}</td>
                                <td>
                                    ${comment}
                                    <button onclick="deleting('${_id}')" class="btn btn-outline-dark" type="button" style="float : right">
                                        삭제
                                    </button>
                                </td>
                            </tr>`
            $('#order-box').append(temp_html)
        })
    })
}

const posting = () => {
    let name = $('#name').val()
    let comment = $('#comment').val()

    let formData = new FormData();
    formData.append("name_give", name);
    formData.append("comment_give", comment);

    fetch('/board', { method: "POST", body: formData }).then((res) => res.json()).then((data) => {
        alert(data['msg'])
        window.location.reload()
    })
}

function deleting(b) {
    let formData = new FormData();
    formData.append("_id_give", b);

    fetch('/board', { method: "DELETE", body: formData }).then((res) =>
        res.json()).then((data) => {
            alert(data['msg'])
            window.location.reload()
        })
}