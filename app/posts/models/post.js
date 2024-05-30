const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Postschema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    title: {
        type: string,
        require: true,
    },
    body:{
        type: string,
    },
    likes: [{
        type: Schema.Types.ObjectId,
        ref: "Like",
    }],
    comments: [{
        type: Schema.Types.ObjectId,
        ref: "Comment",
    }]

},{timestamps:true});

module.exports= mongoose.model("Post",Postschema);