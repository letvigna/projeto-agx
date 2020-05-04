const mongoose = require('mongoose');
const ObjectId = require('mongoose').Types.ObjectId; 
const event = require('express').Router();
const eventSchema = require('../models/eventSchema');
const Event = mongoose.model('Event', eventSchema);

// GET: Get all events - /event
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

// POST: Create new event - /event/new
event.post('/new', (req, res) => {
  let newEvent = new Event({
    title: req.body.title,
    start: req.body.start,
    end: req.body.end
  });
  newEvent.save(err => {
    if (err) {
      res.status(500);
      res.send("Erro ao inserir o novo evento.");
    } else {
      res.status(201);
      res.send("Novo evento inserido.");
    }
  });
});

// PUT: Update an event - /event/edit
event.put('/edit', async(req, res) => {
  let doc = await Event.findById(new ObjectId(req.body.id));
  doc.title = req.body.title;
  doc.save(err => {
    if (err) {
      res.status(500);
      res.send("Erro ao atualizar o evento.");
    } else {
      res.status(200);
      res.send("Evento atualizado.");
    }
  });
});

module.exports = event;
