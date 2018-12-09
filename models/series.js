const mongoose = require('mongoose');

const { Schema } = mongoose;
const { Types: { ObjectId } } = Schema;
const seriesSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    author: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true
    },
    thumnail: {
        type: String,
        required: true
    },
    suggestionList: {
        type: [String],
    },
    postList: {
        type: [ObjectId],
        required: true,
        ref: 'Post'
    },
    tagList: {
        type: [ObjectId],
        required: true,
        ref: 'Tag'
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Series', seriesSchema);