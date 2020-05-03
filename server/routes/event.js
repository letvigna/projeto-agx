const mongoose = require('mongoose');
const event = require('express').Router();
const eventSchema = require('../models/eventSchema');
const Event = mongoose.model('Event', eventSchema);

// Get all events
event.get('/', (req, res) => {
  console.log("event GET req ");
});

// Create new event
event.post('/new', (req, res) => {
  let newEvent = new Event({
    title: req.body.title,
    startDate: req.body.startDate,
    endDate: req.body.endDate
  });
  newEvent.save(err => {
    if (err) return handleError(err);
  });
  res.send("Novo evento inserido.");
});

module.exports = event;
