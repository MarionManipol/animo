const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    profile_picture: {//implement soon
        type: String,
        required: false,
        default: "profile-assets/dlsulogo.jpeg"
    },
    profile_banner: {
        type: String,
        required: false,
        default: "profile-assets/banner-2.jpeg"
    },
    password: { //to implement soon i guess once validation is needed
        type: String,
        required: false
    },
    email: { //same as above
        type: String,
        required: false
    },
    intro: { //bio!
        type: String,
        required: false,
        default: "Hello World!"
    },
    id: {
        type: String, //since Lazada's id is Sponsor, and Students are ID: 12345678
        required: true
    }
    //posts tied to user, implement later

})

module.exports = mongoose.model('users', UserSchema);