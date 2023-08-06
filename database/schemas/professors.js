const mongoose = require('mongoose')

/*const user = require('./users')

const profcommentsSchema = new mongoose.Schema({
    user: {type: user.schema},
    comment: String
})*/

const ProfessorsSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    class: {
        type: String,
        required: true
    },
    bio: { //bio!
        type: String,
        required: false,
        default: "Hello World!"
    },
    id: {
        type: Number,
        required: true,
        minLength: 8,
        maxLength: 9
    },
    upvotes: {
        type: Number,
        required: false,
        default: 0  
    },
    downvotes: {
        type: Number,
        required: false,
        default: 0
    },
    asset:{
        type: String,
        required: true
    }
})



ProfessorsSchema.methods.test = function() {
    console.log(`It is me, ${this.username}`)
}

ProfessorsSchema.virtual('getClass').get(function() {
    return `${this.username}, ${this.class}`
})

const Professor = mongoose.model('professor', ProfessorsSchema)
module.exports = Professor;