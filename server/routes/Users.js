const express = require('express');
const router = express.Router();
const { User } = require('../models');

// Get all users
router.get('/', async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

// Create a new user
router.post('/', async (req, res) => {
 
    const userData = req.body;
    const newUser = await User.create(userData);
    res.json(newUser);
  
});

// router.post("/a", async (req, res) => {
//   const post = req.body;
//   await User.create(post);
//   res.json(post);
// });
module.exports = router;