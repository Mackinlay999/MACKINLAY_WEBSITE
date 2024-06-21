const mongoose = require('mongoose')
const dotenv = require('dotenv');
dotenv.config()
const url = process.env.MONGOOSE_URL

function Config(){
    try {
        mongoose.connect(url)
        console.log("Database Connected");
    } catch (error) {
        console.log("Error Occured In Datbase Configuration", error);
    }
}

module.exports = Config()