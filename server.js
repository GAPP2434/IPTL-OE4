const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const port = 3000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/userDB', { useNewUrlParser: true, useUnifiedTopology: true });

// Define a schema and model for user data
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number,
    address: String,
    phone: String,
    gender: String,
    timestamp: String
});

const User = mongoose.model('User', userSchema);

// Middleware
app.use(bodyParser.json());
app.use(express.static('public'));

// Routes
app.post('/submit', async (req, res) => {
    const { name, email, age, address, phone, gender, timestamp } = req.body;

    const newUser = new User({ name, email, age, address, phone, timestamp});

    try {
        await newUser.save();
        res.status(200).send('User data saved successfully!');
    } catch (error) {
        res.status(500).send('Error saving user data.');
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});