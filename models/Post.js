const mongoose = require('mongoose');
const { stringify } = require('querystring');

const postSchema = mongoose.Schema({
    name: String,
    title: String,
    desc: String
});

module.exports = mongoose.model('Posts', postSchema);