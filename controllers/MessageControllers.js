const messageSchema = require('../model/Message');

const addMessage = async (req, res) => {
    try {
        const newMessage = new messageSchema(req.body);
        console.log("New Message", req.body);
        await newMessage.save();
        res.status(200).json({ msg: 'you added new Message', newMessage });
    } catch (err) {
        console.log(err);
        res.send('You have a problem');
    }
};
const getMessageById = async (req, res) => {
    try {
        const { id } = req.params;
        console.log("id", id);
        const message = await messageSchema.findById(id);
        res.status(200).json({ msg: 'Message', message });
    } catch (err) {
        console.log(err);
        res.send('You have a problem');
    }
};

const getMessageBySender = async (req, res) => {
    try {
        const { sender } = req.params;
        console.log("sender", sender);
        const message = await messageSchema.find({ sender: sender });
        res.status(200).json({ msg: 'Message', message });
    } catch (err) {
        console.log(err);
        res.send('You have a problem');
    }
}
const getMessageByReceiver = async (req, res) => {
    try {
        const { receiver } = req.params;
        console.log("receiver", receiver);
        const message = await messageSchema.find({ receiver: receiver });
        res.status(200).json({ msg: 'Message', message });
    } catch (err) {
        console.log(err);
        res.send('You have a problem');
    }
}
const getMessageByAdvertId = async (req, res) => {
    try {
        const { advertId } = req.params;
        console.log("advertId", advertId);
        const message = await messageSchema.find({ advertId: advertId });
        res.status(200).json({ msg: 'Message', message });
    } catch (err) {
        console.log(err);
        res.send('You have a problem');
    }
}
const getAllMessages = async (req, res) => {
    try {
        const messages = await messageSchema.find();
        res.status(200).json({ msg: 'You got all the messages', messages });
    } catch (err) {
        console.log(err);
        res.send('error is showing');
    }
}

module.exports = { addMessage, getMessageById, getMessageBySender, getMessageByReceiver, getMessageByAdvertId, getAllMessages };