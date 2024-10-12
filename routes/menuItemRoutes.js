const express = require('express');
const router = express.Router();
const MenuItem = require('./../models/MenuItem');

// POST route to add menu items
router.post('/', async (req, res) => {
    console.log(req.body); // Log the received body
    try {
        const newItem = new MenuItem(req.body); // Save new menu item
        await newItem.save();
        res.status(201).send(newItem);
    } catch (error) {
        res.status(400).send(error.message); // Handle validation or saving errors
    }
});

// GET route to fetch menu items
router.get('/', async (req, res) => {
    try {
        const items = await MenuItem.find(); // Fetch all menu items
        res.status(200).send(items);
    } catch (error) {
        res.status(500).send(error.message); // Handle errors in fetching
    }
});
module.exports = router;