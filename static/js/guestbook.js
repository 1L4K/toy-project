$(document).ready(function () {
    listing();
});

const listing = () => {
    fetch('/board').then((res) => res.json()).then((data) => {
        let rows = data['result']
        rows.forEach((a) => {
            let name = a['name']
            let comment = a['comment']

            let temp_html = `<tr>
                                <td>${name}</td>
                                <td>${comment}</td>
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