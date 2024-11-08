// server.js (or app.js)

// Import necessary packages
const express = require('express');
const cors = require('cors');
require('dotenv').config(); // Loads environment variables from .env file
console.log('API Key:', process.env.WEATHER_API_KEY);

// Initialize the app
const app = express();

// Enable CORS if needed
app.use(cors());

// Define the route to serve the API key
app.get('/api-key', (req, res) => {
    res.json({ apiKey: process.env.WEATHER_API_KEY });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
