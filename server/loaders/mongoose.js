const mongoose = require('mongoose');

const load = async () => {
  await mongoose.connect(process.env.DB_URL, { useNewUrlParser: true, useUnifiedTopology: true });
  const db = mongoose.connection;
  db.on('error', console.error.bind(console, 'Erro de conexão:'));
  db.once('open', () => { console.log("Conectado com o Mongoose."); });
}

module.exports = load;
