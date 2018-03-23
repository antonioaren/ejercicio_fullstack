var id_owner = sessionStorage.setItem('ownerId', Math.random().toString(36).substr(7));
var id_receiver = sessionStorage.setItem('receiverId', Math.random().toString(36).substr(7));





function messageToSend() {

    var message = $('#textBox').val();

    var MESSAGE = {
        owner: id_owner,
        reciever: id_receiver,
        text: message
    }

    $.ajax({
            type: 'POST',
            url: 'http://localhost:5000/users',
            data: JSON.stringify(MESSAGE),
            contentType: 'application/json',
            dataType: 'json'
        })
        .then(response => {
            console.log(response);

        })
        .catch(error => {
            console.log("Error, algo ha fallado")
        })

}

function messageToRecieve() {
    $.get('/')
    $.('#messages').append(`
    <div class="col s12 m6">
    <div class="card blue-grey darken-1">
        <div class="card-content white-text">
            <p></p>
        </div>
    </div>
</div>`)
}