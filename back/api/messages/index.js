const router = require('express').Router();
const messageController = require('./messageController')

router.get('/',messageController.getAll);
router.post('/',messageController.createMessage);

module.exports = router