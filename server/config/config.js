//require('./mongoDBConexion');

// =====================================
// Puerto
// =====================================
process.env.PORT = process.env.PORT || 3000;

// =====================================
// Entorno
// =====================================
// En Heroku cogerá en NODE_ENV y en local el 'dev'
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

if (process.env.NODE_ENV === 'dev') {
  //process.env.DB_URL = process.env.DB_Local_URL;
  process.env.DB_URL = process.env.MONGO_URI;
} else {
  process.env.DB_URL = process.env.MONGO_URI;
}
