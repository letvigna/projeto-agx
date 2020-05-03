let home = require('express').Router();

home.get('/', (req, res) => {
  res.send("Utilizar a rota /events para os eventos!");
})

module.exports = home;
