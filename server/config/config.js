require('./mongoDBConexion');

// =====================================
// Puerto
// =====================================
process.env.PORT = process.env.PORT || 3000;

// =====================================
// Entorno
// =====================================
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

// =====================================
// Vencimiento del Token
// =====================================
// 60 segundos
// 60 minutos
// 24 horas
// 30 días
process.env.CADUCIDAD_TOKEN = 60 * 60 * 24 * 30;

// =====================================
// SEED de autenticación
// =====================================
process.env.SEED = process.env.SEED || 'este-es-el-seed-desarrollo';

// =====================================
// Base de datos
// =====================================
if (process.env.NODE_ENV === 'dev') {
  process.env.DB_URL = process.env.DB_Local_URL;
  //process.env.DB_URL = process.env.MONGO_URI;
} else {
  process.env.DB_URL = process.env.MONGO_URI;
}
