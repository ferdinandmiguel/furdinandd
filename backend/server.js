// filepath: c:\Users\Miguel Perico\websys_project\backend\server.js
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 3001;

const authRoutes = require('./routes/auth');

mongoose.connect('mongodb://localhost:27017/websys_project', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use(bodyParser.json());

// Serve static files from the frontend
app.use(express.static(path.join(__dirname, '../frontend/dist')));

// Use auth routes
app.use('/api', authRoutes);

// API endpoint example
app.get('/api', (req, res) => {
  res.json({ message: 'Hello from the backend!' });
});

// Catch-all handler to serve the frontend's index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/dist/index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});