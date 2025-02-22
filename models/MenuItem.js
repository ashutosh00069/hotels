const { name } = require('body-parser');
const mongoose = require('mongoose');

const menuItemSchema = new mongoose.Schema({
    name:{type: String, required: true},
    price:{type: Number, required: true},
    taste:{type: String, enum: ['sweet',  'sour', 'spicy'], required: true},
    is_drink:{type: Boolean, default: false, required: true},
    ingredients:{type: [String], default: []},
    num_sales: {
        type: Number,
        default: 0
    }
});

const MenuItem = mongoose.model('menuItem', menuItemSchema);
module.exports = MenuItem;