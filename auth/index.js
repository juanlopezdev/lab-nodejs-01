const { json } = require('body-parser');
const jwt = require('jsonwebtoken');
const config = require('../config');
const error = require('../utils/error');

const secret = config.jwt.secret;

function sign(data) {
  let jsonData = JSON.parse(JSON.stringify(data)); // https://stackoverflow.com/questions/47117709/payload-error-in-jsonwebtoken
  return jwt.sign(jsonData, secret);
}

function verify(token) {
  return jwt.verify(token, secret);
}

const check = {
  own: function (req, owner) {
    const decoded = decodeHeader(req);
    if (decoded.id !== owner) {
      throw error('No puedes hacer esto', 401);
    }
  },

  logged: function (req) {
    const decoded = decodeHeader(req);
  }
}

function getToken(auth) {
  if (!auth) {
    throw new Error('No viene el token');
  }

  if (auth.indexOf('Bearer ') === -1) {
    throw new Error('Formato inválido')
  }

  let token = auth.replace('Bearer ', '');

  return token;
}

function decodeHeader(req) {
  const authorization = req.headers.authorization || '';
  const token = getToken(authorization);
  const decoded = verify(token);

  req.user = decoded;

  return decoded;
}

module.exports = {
  sign,
  check
};