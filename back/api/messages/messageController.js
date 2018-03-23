const _ = require('lodash');
const messsage = require('./messagesModel')

module.exports = {
    getAll: getAll,
    createMessage: createMessage,
    getConversation: getConversation
};

function getAll(req, res) {
    return messsage.find({}, (err, response) => {
        return res.json(response);
    })
}

function createMessage(req, res) {
    var message = req.body;
    message.createdAt = Date.now();
    return messsage.create(req.body)
        .then(response => res.json(response))
        .catch((err) => res.status(400).send());
}

function getConversation(req, res) {
    var owner = req.query.owner;
    var receiver = req.query.receiver;
    var messagesOfUsers = [];
    messsage.find({ owner: owner, receiver: receiver }, (error, response) => {
        messagesOfUsers.push(response)
        messsage.find({ owner: receiver, receiver: owner }, (error, response) => {
            messagesOfUsers.push(response)
            messagesOfUsers = _.flatten(messagesOfUsers);
            messagesOfUsers = _.orderBy(messagesOfUsers,['createdAt'],['asc'])
            res.json(messagesOfUsers)
        })
    })
}
