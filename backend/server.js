const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');


dotenv.config(); // Load variables from .env

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);



// Connect to MongoDB
connectDB();

// Routes
app.get("/", (req, res) => {
  res.send("BeFit Gym Backend is Running ✅");
});

// Start Server
app.listen(PORT, () => {
  console.log(`✅ Server started at http://localhost:${PORT}`);
});
