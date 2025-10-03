const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const requestRoutes = require('./routes/requests');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/requests', requestRoutes);

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/fixit', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
})
.catch((err) => {
    console.error('MongoDB connection error:', err);
});
