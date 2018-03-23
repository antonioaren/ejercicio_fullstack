const router = require('express').Router();
const messageController = require('./messageController')

router.get('/',messageController.getAll);
router.post('/',messageController.createMessage);
router.get('/chat/',messageController.getConversation);

module.exports = router