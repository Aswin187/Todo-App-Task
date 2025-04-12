const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  description: String,
  status: { type: String, enum: ['pending', 'in-progress', 'completed'], default: 'pending' }
}, { timestamps: true });

module.exports = mongoose.model('Todo', todoSchema);
