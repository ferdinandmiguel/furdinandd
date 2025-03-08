const express = require('express');
const router = express.Router();
const Cat = require('../models/cat');
const Dog = require('../models/dog');

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
router.post('/cats', async (req, res) => {
  try {
    const cat = new Cat(req.body);
    await cat.save();
    res.status(201).json(cat);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Get all cats
router.get('/cats', async (req, res) => {
  try {
    const cats = await Cat.find();
    res.json(cats);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get a single cat by ID
router.get('/cats/:id', async (req, res) => {
  try {
    const cat = await Cat.findById(req.params.id);
    if (!cat) return res.status(404).json({ message: 'Cat not found' });
    res.json(cat);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update a cat by ID
router.put('/cats/:id', async (req, res) => {
  try {
    const cat = await Cat.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!cat) return res.status(404).json({ message: 'Cat not found' });
    res.json(cat);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete a cat by ID
router.delete('/cats/:id', async (req, res) => {
  try {
    const cat = await Cat.findByIdAndDelete(req.params.id);
    if (!cat) return res.status(404).json({ message: 'Cat not found' });
    res.json({ message: 'Cat deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create a new dog
router.post('/dogs', async (req, res) => {
  try {
    const dog = new Dog(req.body);
    await dog.save();
    res.status(201).json(dog);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Get all dogs
router.get('/dogs', async (req, res) => {
  try {
    const dogs = await Dog.find();
    res.json(dogs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get a single dog by ID
router.get('/dogs/:id', async (req, res) => {
  try {
    const dog = await Dog.findById(req.params.id);
    if (!dog) return res.status(404).json({ message: 'Dog not found' });
    res.json(dog);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update a dog by ID
router.put('/dogs/:id', async (req, res) => {
  try {
    const dog = await Dog.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!dog) return res.status(404).json({ message: 'Dog not found' });
    res.json(dog);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete a dog by ID
router.delete('/dogs/:id', async (req, res) => {
  try {
    const dog = await Dog.findByIdAndDelete(req.params.id);
    if (!dog) return res.status(404).json({ message: 'Dog not found' });
    res.json({ message: 'Dog deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;