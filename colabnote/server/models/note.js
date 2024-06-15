
const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema({
    data: {
        type:String
    },
    owner: {    
        type:String,
        required : true
    },
    auth_users: {
        type: [String],
    },
    isDeleted:{
        type:Boolean,
        default:false
    }
});

module.exports = Note = mongoose.model('notes', noteSchema);

