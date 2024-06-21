const ChatUser = require("../Model/ChatBotUserModel")

const RegisterChatUser = async ( req,res) =>{
    try {
        const {name, email, phone_number} = req.body
        const newUser  = new ChatUser({name, email, phone_number})
        await newUser.save()
        return res.status(201).json("User Added Successfully")
    } catch (error) {
        console.log("Error in Chat User", error);
        return res.status(500).json({message:'Internal Server Error'})
    }
}

module.exports = {RegisterChatUser}