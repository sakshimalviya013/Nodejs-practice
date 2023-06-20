const express = require('express');
const app = express();

// Sample data
let users = [
  { id: 1, name: 'Sakshi Malviya' },
  { id: 2, name: 'Shreya Malviya' },
  { id: 3, name: 'Vedansh Malviya' },
  { id: 4, name: 'reeta Malviya' }
];

// Middleware to parse JSON
app.use(express.json());

// GET endpoint to retrieve all users
app.get('/users', (req, res) => {
  res.json(users);
});

// GET endpoint to retrieve a specific user by ID
app.get('/users/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const user = users.find(user => user.id === userId);

  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});

// POST endpoint to create a new user
app.post('/users', (req, res) => {
  const newUser = {
    id: users.length + 1,
    name: req.body.name
  };

  users.push(newUser);
  res.status(201).json(newUser);
});

// PUT endpoint to update an existing user
app.put('/users/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const user = users.find(user => user.id === userId);

  if (user) {
    user.name = req.body.name;
    res.json(user);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});

// DELETE endpoint to delete a user
app.delete('/users/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const userIndex = users.findIndex(user => user.id === userId);

  if (userIndex !== -1) {
    const deletedUser = users.splice(userIndex, 1);
    res.json(deletedUser[0]);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});

// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
