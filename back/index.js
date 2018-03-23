const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();


var corsOptions = {
    origin: 8080
}

mongoose.connect('mongodb://localhost/chatMessagesDB');

app.use(cors(corsOptions));
app.use(express.json());

const messageRouter = require('./api/messages/');


app.use('/', messageRouter);

app.listen(5000, (error) => {
    console.log("servidor escuchando en puerto 5000")
})
