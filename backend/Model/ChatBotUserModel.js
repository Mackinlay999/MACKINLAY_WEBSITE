const mongoose = require('mongoose');

const ChatBotUserSchema = mongoose.Schema({
    name:String,
    email:String,
    phone_number:String
})

const ChatUser = mongoose.model("chat-user", ChatBotUserSchema)
module.exports = ChatUser