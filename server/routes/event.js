const mongoose = require('mongoose');
const event = require('express').Router();
const eventSchema = require('../models/eventSchema');
const Event = mongoose.model('Event', eventSchema);

// Get all events - /event
event.get('/', (req, res) => {
  Event.find({}, (err, docs) => {
    if (err) {
      res.status(500);
      res.send("Erro ao adquirir eventos.");
    } else {
      res.status(200);
      res.send(docs);
    }
  });
});

// Create new event - /event/new
event.post('/new', (req, res) => {
  let newEvent = new Event({
    title: req.body.title,
    startDate: req.body.startDate,
    endDate: req.body.endDate
  });
  newEvent.save(err => {
    if (err) {
      res.status(500);
      res.send("Erro ao inserir o novo evento.");
    } else {
      res.status(201);
      res.send(`Novo evento inserido.`);
    }
  });
});

module.exports = event;
