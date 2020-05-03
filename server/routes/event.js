let event = require('express').Router();

// http://localhost:3010/event
// Get all events
event.get('/', (req, res) => {
  console.log("event GET req ");
})

// http://localhost:3010/event/new
// Create new event
event.post('/new', (req, res) => {
  console.log(req.body);
})

module.exports = event;
