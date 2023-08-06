const mongoose = require('mongoose')
const user = require('./users')

const PostsSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    profile_picture:{
        type:String,
        required: true
    },
    /*user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },*/
    likes: {
        type: Number,
        required: false,
        default: 0
    },
    comments: {
        type: String,
        required: false,
        default: 0
    },
    date:{ //date format is weird, string for now
        type: String,
        required: false,
        default: '01-01-2000'
    },
    media_content:{
        type: String,
        required: false
    },
    content:{
        type: String,
        required: false
    }
})

const Post = mongoose.model('post', PostsSchema);
module.exports = Post;