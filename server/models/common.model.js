const mongoose = require('mongoose');

const CommonSchema = new mongoose.Schema({
    name: {
        type: String,
        require: [true, "Name is required"],
        minlength: [2, "Name must contain more than 2 characters"]
    },
    texts: {
        type: String,
        require: [true, "Your opinion is required and it matters"],
        minlength: [10, "Your opinion must have more than 10 characters"]
    },
    opinion: {
        type: String
    },
    improve: {
        type: String,
    },
    likes: {
        type: Number,
        default: 0
    },
    dislikes: {
        type: Number,
        default: 0
    },
    edit: {
        type: String
    }
}, {timestamps:true});

module.exports.Common = mongoose.model('Common', CommonSchema);