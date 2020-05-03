let event = require('express').Router();

// http://localhost:8080/event
// Get all events
event.get('/', (req, res) => {
  console.log("event GET req ");
})

// http://localhost:8080/event/new
// Create new event
event.post('/new', (req, res) => {
  console.log("event new POST req ");
})

module.exports = event;
