// server.js
const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Welcome to BeFit Gym Backend 🔥');
});

app.listen(5000, () => {
  console.log('✅ Server is running on http://localhost:5000');
});
