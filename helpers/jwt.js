const jwt = require('jsonwebtoken');

const generarJWT = (uid) => {
  return new Promise((resolve, reject) => {
    const payload = {
      uid,
    };
  
    jwt.sign(payload, process.env.JWT_KEY, {
      expiresIn: '24h'
    }, (err, token) => {
      if (err) {
        reject(err);
      }
      resolve(token);
    });
  })
};

const comprobarJWT = (token = '') => {
  try {
    const { uid } = jwt.verify(token, process.env.JWT_KEY);
    return [true, uid];
  } catch (err) {
    return [false, null];
  }
}

module.exports = {
  generarJWT,
  comprobarJWT,
}
