
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const heroSchema = new Schema({

    name:{type:String},

}, {
    collection: 'hero'
});

module.exports = mongoose.model('hero', heroSchema);

