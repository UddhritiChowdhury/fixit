const express = require('express');
const router = express.Router();
const Request = require('../models/Request');

// Get all requests
router.get('/', async (req, res) => {
    try {
        const requests = await Request.find().sort({ createdAt: -1 });
        res.json(requests);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Create a new request
router.post('/', async (req, res) => {
    const { roomNumber, problem } = req.body;

    if (!roomNumber || !problem) {
        return res.status(400).json({ message: 'Room number and problem are required.' });
    }

    const newRequest = new Request({ roomNumber, problem });

    try {
        const savedRequest = await newRequest.save();
        res.status(201).json(savedRequest);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
