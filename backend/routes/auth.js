// filepath: c:\Users\Miguel Perico\websys_project\backend\routes\auth.js
const express = require('express');
const router = express.Router();
const db = require('../server');

// Mock user data
const users = [
  { username: 'admin', password: 'admin123', role: 'admin' },
  { username: 'user', password: 'user123', role: 'user' }
];

// Login endpoint
router.post('/login', (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username && u.password === password);
  if (user) {
    res.json({ role: user.role });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

// Register endpoint
router.post('/register', (req, res) => {
  const { username, email, password } = req.body;
  const userExists = users.some(u => u.username === username);
  if (userExists) {
    res.status(400).json({ message: 'User already exists' });
  } else {
    users.push({ username, email, password, role: 'user' });
    res.status(201).json({ message: 'User registered successfully' });
  }
});

// Create a new cat
router.post('/cats', (req, res) => {
  const { name, gender, description, rescue_date, health_status, adopted, image } = req.body;
  const query = 'INSERT INTO cats (name, gender, description, rescue_date, health_status, adopted, image) VALUES (?, ?, ?, ?, ?, ?, ?)';
  db.query(query, [name, gender, description, rescue_date, health_status, adopted, image], (err, result) => {
    if (err) {
      res.status(400).json({ message: err.message });
      return;
    }
    res.status(201).json({ id: result.insertId, ...req.body });
  });
});

// Get all cats
router.get('/cats', (req, res) => {
  const query = 'SELECT * FROM cats';
  db.query(query, (err, results) => {
    if (err) {
      res.status(500).json({ message: err.message });
      return;
    }
    res.json(results);
  });
});

// Get a single cat by ID
router.get('/cats/:id', (req, res) => {
  const query = 'SELECT * FROM cats WHERE id = ?';
  db.query(query, [req.params.id], (err, results) => {
    if (err) {
      res.status(500).json({ message: err.message });
      return;
    }
    if (results.length === 0) {
      res.status(404).json({ message: 'Cat not found' });
      return;
    }
    res.json(results[0]);
  });
});

// Update a cat by ID
router.put('/cats/:id', (req, res) => {
  const { name, gender, description, rescue_date, health_status, adopted, image } = req.body;
  const query = 'UPDATE cats SET name = ?, gender = ?, description = ?, rescue_date = ?, health_status = ?, adopted = ?, image = ? WHERE id = ?';
  db.query(query, [name, gender, description, rescue_date, health_status, adopted, image, req.params.id], (err, result) => {
    if (err) {
      res.status(400).json({ message: err.message });
      return;
    }
    if (result.affectedRows === 0) {
      res.status(404).json({ message: 'Cat not found' });
      return;
    }
    res.json({ id: req.params.id, ...req.body });
  });
});

// Delete a cat by ID
router.delete('/cats/:id', (req, res) => {
  const query = 'DELETE FROM cats WHERE id = ?';
  db.query(query, [req.params.id], (err, result) => {
    if (err) {
      res.status(500).json({ message: err.message });
      return;
    }
    if (result.affectedRows === 0) {
      res.status(404).json({ message: 'Cat not found' });
      return;
    }
    res.json({ message: 'Cat deleted' });
  });
});

// Create a new dog
router.post('/dogs', (req, res) => {
  const { name, gender, description, rescue_date, health_status, adopted, image } = req.body;
  const query = 'INSERT INTO dogs (name, gender, description, rescue_date, health_status, adopted, image) VALUES (?, ?, ?, ?, ?, ?, ?)';
  db.query(query, [name, gender, description, rescue_date, health_status, adopted, image], (err, result) => {
    if (err) {
      res.status(400).json({ message: err.message });
      return;
    }
    res.status(201).json({ id: result.insertId, ...req.body });
  });
});

// Get all dogs
router.get('/dogs', (req, res) => {
  const query = 'SELECT * FROM dogs';
  db.query(query, (err, results) => {
    if (err) {
      res.status(500).json({ message: err.message });
      return;
    }
    res.json(results);
  });
});

// Get a single dog by ID
router.get('/dogs/:id', (req, res) => {
  const query = 'SELECT * FROM dogs WHERE id = ?';
  db.query(query, [req.params.id], (err, results) => {
    if (err) {
      res.status(500).json({ message: err.message });
      return;
    }
    if (results.length === 0) {
      res.status(404).json({ message: 'Dog not found' });
      return;
    }
    res.json(results[0]);
  });
});

// Update a dog by ID
router.put('/dogs/:id', (req, res) => {
  const { name, gender, description, rescue_date, health_status, adopted, image } = req.body;
  const query = 'UPDATE dogs SET name = ?, gender = ?, description = ?, rescue_date = ?, health_status = ?, adopted = ?, image = ? WHERE id = ?';
  db.query(query, [name, gender, description, rescue_date, health_status, adopted, image, req.params.id], (err, result) => {
    if (err) {
      res.status(400).json({ message: err.message });
      return;
    }
    if (result.affectedRows === 0) {
      res.status(404).json({ message: 'Dog not found' });
      return;
    }
    res.json({ id: req.params.id, ...req.body });
  });
});

// Delete a dog by ID
router.delete('/dogs/:id', (req, res) => {
  const query = 'DELETE FROM dogs WHERE id = ?';
  db.query(query, [req.params.id], (err, result) => {
    if (err) {
      res.status(500).json({ message: err.message });
      return;
    }
    if (result.affectedRows === 0) {
      res.status(404).json({ message: 'Dog not found' });
      return;
    }
    res.json({ message: 'Dog deleted' });
  });
});

module.exports = router;