const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Userschema = new Schema({
    username:{
        type: String,
        required:true,
        unique: true,
    },
    email:{
        type: String,
        required: true,
        unique: true,
    },
    password:{
        type: String,
        required: true,
    },
    fullName: String,
    posts: [{
        type: Schema.Types.ObjectId,
        ref: "Post"
    }],
    likes: [{
        type: Schema.Types.ObjectId,
        ref: "Like"
    }],
    comments: [{
        type: Schema.Types.ObjectId,
        ref: "Comment"
    }],
})

module.exports = mongoose.model("User",Userschema);