const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const Usuario = require('../models/usuario');

const app = express();

app.post('/login', (req, res) => {
  const body = req.body;

  Usuario.findOne({ email: body.email })
    .then(usuarioDB => {
      if (!usuarioDB) {
        return res.status(400).json({
          ok: false,
          err: {
            // Los paréntesis indican el error. NO HACER EN PRODUCCIÓN
            message: '(Usuario) o contraseña incorrecto',
          },
        });
      }

      // Encriptamos la contraseña y vemos si es la misma
      if (!bcrypt.compareSync(body.password, usuarioDB.password)) {
        return res.status(400).json({
          ok: false,
          err: {
            // Los paréntesis indican el error. NO HACER EN PRODUCCIÓN
            message: 'Usuario o (contraseña) incorrecto',
          },
        });
      }

      const token = jwt.sign(
        { usuario: usuarioDB },
        'este-es-el-seed-desarrollo',
        { expiresIn: process.env.CADUCIDAD_TOKEN }
      );

      res.json({
        ok: true,
        usuario: usuarioDB,
        token,
      });
    })
    .catch(err => {
      res.status(500).json({
        ok: false,
        err,
      });
    });
});

module.exports = app;
