const mongoose = require('mongoose');

var Messageschema = mongoose.Schema({
    id: String,
    owner: String,
    receiver: String,
    createdAt: Number,
    text: {
        type: String,
        required: [true, 'Tienes que meter un mensage'],
        minlength: [1, 'Minimo ponme 1 caracteres']
    }
});
var message = mongoose.model('tweets', Messageschema);

module.exports = message;