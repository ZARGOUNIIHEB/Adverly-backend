const express = require('express');
const messageRoute = express.Router();
const { addMessage, getMessageById, getMessageBySender, getMessageByReceiver, getMessageByAdvertId, getAllMessages } = require('../controllers/MessageControllers');

messageRoute.use(express.json());

//http://localhost:5004/message/addMessage
messageRoute.post('/addMessage', addMessage);

//http://localhost:5004/message/getMessageById/:id
messageRoute.get('/getMessageById/:id', getMessageById);

//http://localhost:5004/message/getMessageBySender/:sender
messageRoute.get('/getMessageBySender/:sender', getMessageBySender);

//http://localhost:5004/message/getMessageByReceiver/:receiver
messageRoute.get('/getMessageByReceiver/:receiver', getMessageByReceiver);

//http://localhost:5004/message/getMessageByAdvertId/:advertId
messageRoute.get('/getMessageByAdvertId/:advertId', getMessageByAdvertId);

//http://localhost:5004/message/allMessages
messageRoute.get('/allMessages', getAllMessages);

module.exports = messageRoute;