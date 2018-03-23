
sessionStorage.setItem('id' , Math.random().toString(36).substr(7));
var data = sessionStorage.getItem('id');
console.log(data);

function messageToSend() {
    var mensaje = $('#textBox').val();


    var MENSAJE = {
        owner : "" ,
        reciever: "",        
        text : mensaje 
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