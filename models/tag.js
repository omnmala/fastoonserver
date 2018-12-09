const mongoose = require('mongoose');

const { Schema } = mongoose;
const tagSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Tag', tagSchema);