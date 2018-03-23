


function messageToSend() {
    var mensaje = $('#textBox').val();


    var MENSAJE = {
        owner : "" ,
        reciever: "",
        createAt : Date.now(),
        text : "" 
    }

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