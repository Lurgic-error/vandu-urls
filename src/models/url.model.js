const mongoose = require('mongoose')

const urlSchema = new mongoose.Schema({

    full: {
        type: String,
        required: true
    },
    short: {
        type: String,
        required:true
    },
    views: {
        type: Number,
        requried: true,
        default: 0
    },
    code: {
        type: String
    }

}, {
    timestamps: {
        createdAt: 'created',
        updatedAt: 'modified'
    },
    toJSON: {
        virtuals: true
    },
    strict: false
})

module.exports = mongoose.model('URL', urlSchema)