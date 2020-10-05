
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const heroSchema = new Schema({

    hid:{type:String},name:{type:String},

}, {
    collection: 'hero'
});

module.exports = mongoose.model('hero', heroSchema);

