const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    fullname : {
        type : String,
        required : true,
    },
    address : {
        type : String,
        required : true,
    },
    //add more
},
{ timestamps : true }
)

module.exports = mongoose.model('User', UserSchema) 