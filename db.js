const mongoose = require('mongoose');
const dbUri = 'mongodb://localhost:27017/mydatabase'; // Replace with your actual connection string

mongoose.connect(dbUri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log('MongoDB connection error:', err));
