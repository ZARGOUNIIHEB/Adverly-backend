const mongoose = require('mongoose');

const MessageSchema = mongoose.Schema({
    sender: String,
    receiver: String,
    messageCore: String,
    messageDate: Date,
    advertId: String

})
module.exports = mongoose.model('messageSchemas', MessageSchema);