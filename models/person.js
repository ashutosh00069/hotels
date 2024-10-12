const mongoose = require('mongoose');

const personSchema = new mongoose.Schema({
    name: { type: String, required: true },
    age: { type: Number, required: true },
    occupation: { type: String, required: true },
    mobile: { type: String, required: true },
    email: { type: String, required: true },
    address: { type: String, required: true },
    salary: { type: Number, required: true },
    username:{type:String, required:true},
    password:{type:String, requiredtrue}
});

const Person = mongoose.model('Person', personSchema);

module.exports = Person;
