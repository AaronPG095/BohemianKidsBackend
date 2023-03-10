import { pbkdf2Sync, randomBytes } from 'crypto';
import jwt from 'jsonwebtoken';
import { readFileSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// ES6 modules not supporting __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PRIV_KEY = readFileSync(__dirname + '/id_rsa_priv.pem', 'utf8');
const PUB_KEY = readFileSync(__dirname + '/id_rsa_pub.pem', 'utf8');

/**
 * -------------- HELPER FUNCTIONS ----------------
 */

/**
 *
 * @param {*} password - The plain text password
 * @param {*} hash - The hash stored in the database
 * @param {*} salt - The salt stored in the database
 *
 * This function uses the crypto library to decrypt the hash using the salt and then compares
 * the decrypted hash/salt with the password that the user provided at login
 */
export function validPassword(password, hash, salt) {
  var hashVerify = pbkdf2Sync(password, salt, 10000, 64, 'sha512').toString(
    'hex'
  );
  return hash === hashVerify;
}

/**
 *
 * @param {*} password - The password string that the user inputs to the password field in the register form
 *
 * This function takes a plain text password and creates a salt and hash out of it.  Instead of storing the plaintext
 * password in the database, the salt and hash are stored for security
 *
 */
export function genPassword(password) {
  const passwordString = String(password);
  var salt = randomBytes(32).toString('hex');
  var genHash = pbkdf2Sync(passwordString, salt, 10000, 64, 'sha512').toString(
    'hex'
  );

  return {
    salt: salt,
    hash: genHash,
  };
}

/**
 * @param {*} user - The user object. We need this to set the JWT `sub` payload property to the MongoDB user ID
 */
export function issueJWT(user) {
  const _id = user._id;

  const expiresIn = '1d';

  const payload = {
    sub: _id,
    iat: Date.now(),
  };

  const signedToken = jwt.sign(payload, PRIV_KEY, {
    expiresIn: expiresIn,
    algorithm: 'RS256',
  });

  return {
    token: 'Bearer ' + signedToken,
    expires: expiresIn,
  };
}

/**
 * @param {*} authMiddleware - function takes
 * token from client and and verify it with jwt
 * method and public key
 */

export function authMiddleware(req, res, next) {
  const tokenParts = req.headers.authorization;

  if (tokenParts === undefined) {
    return res.status(401).json({
      success: false,
      msg: 'You are not authorized to visit this route.',
    });
  } else {
    const tokenPartsSplit = tokenParts.split(' ');

    if (
      tokenPartsSplit[0] === 'Bearer' &&
      // This regular expression check if token has
      // syntax 'text.text.text'
      tokenPartsSplit[1].match(/\S*\.\S*\.S*/) !== null
    ) {
      try {
        const verification = jwt.verify(tokenPartsSplit[1], PUB_KEY, {
          algorithms: ['RS256'],
        });

        req.jwt = verification;
        next();
      } catch (error) {
        res.status(401).json({
          success: false,
          msg: 'You are not authorized to visit this route.',
        });
      }
    } else {
      res.status(401).json({
        success: false,
        msg: 'You are not authorized to visit this route.',
      });
    }
  }
}
