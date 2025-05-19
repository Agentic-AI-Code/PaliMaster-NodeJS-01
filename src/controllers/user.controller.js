// src/controllers/user.controller.js
exports.getUsers = (req, res) => res.json({ message: 'GET /users - Get all users (placeholder)' });
exports.getUserById = (req, res) => res.json({ message: `GET /users/${req.params.id} - Get user by ID (placeholder)` });
exports.createUser = (req, res) => res.status(201).json({ message: 'POST /users - Create new user (placeholder)' });
exports.updateUser = (req, res) => res.json({ message: `PUT /users/${req.params.id} - Update user (placeholder)` });
exports.deleteUser = (req, res) => res.json({ message: `DELETE /users/${req.params.id} - Delete user (placeholder)` });
