const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Título obrigatório.']
  },
  start: {
    type: String,
    required: [true, 'Data de início obrigatória.']
  },
  end: {
    type: String,
    required: [true, 'Data de fim obrigatória.']
  }
});

module.exports = eventSchema;