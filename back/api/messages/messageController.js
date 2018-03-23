const messsage  = require('./messagesModel')

module.exports = {
    getAll: getAll,
    createMessage: createMessage
};

function getAll(req, res) {
    return messsage.find({}, (err, response) => {
        return res.json(response);
    })
}

function createMessage(req, res) {
    var message = req.body;
    message.timestap = Date.now();
    return messsage.create(req.body)
        .then(response => res.json(response))
        .catch((err) => res.status(400).send());
}