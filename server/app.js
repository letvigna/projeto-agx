require('dotenv').config();
const mongooseLoader = require('./loaders/mongoose');
const expressLoader = require('./loaders/express');
const port = 3010;

async function startServer() {
  await mongooseLoader().then(msg => {
    console.log("Mongoose loaded.");
  });

  await expressLoader().then(app => {
    console.log("Express configured.");
    app.listen(port, err => {
      if (err) {
        console.log(err);
      }
      console.log(`Servidor rodando na porta ${port}. :)`);
    });
  });
}

startServer();