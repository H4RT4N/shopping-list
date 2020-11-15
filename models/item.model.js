const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// DB Schemas
const itemSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    category: {
        type: String,
        default: ""
    }
});

module.exports = Item = mongoose.model('Item', itemSchema);