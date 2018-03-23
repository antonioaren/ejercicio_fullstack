


function messageToSend() {
    var mensaje = $('#textBox').val();

    $.ajax(
        {
            type: 'POST',
            url: 'http://localhost:5000/users',
            data: JSON.stringify(MENSAJE),
            contentType: 'application/json',
            dataType: 'json'
        }
    )
    .then(response => {
        console.log(response);

    })
    .catch(error => {
        console.log("Error, algo ha fallado")
    })

}

function messageToRecieve() {

}