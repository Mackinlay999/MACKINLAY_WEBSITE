const chatRoutes = require("express").Router();
const {RegisterChatUser} = require("../Controller/ChatUserController")

chatRoutes.post("/chat-user", RegisterChatUser);

module.exports  = chatRoutes;