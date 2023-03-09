import { Router } from 'express';
import { authMiddleware } from '../../helperFunctions.js';
import passport from 'passport';
export const protectedRoute = Router();

protectedRoute.get('/', authMiddleware, function (req, res, next) {
  try {
    res.status(200).json({ success: true, msg: 'User is authorized.' });
  } catch (error) {
    next(error);
  }
});

// protectedRoute.get(
//   '/google',
//   passport.authenticate('google', (req, res, next) => {
//     res.status(401).json({ success: true, msg: 'User is not authorized.' });
//   }),
//   function (req, res, next) {
//     try {
//       res.status(200).json({ success: true, msg: 'User is authorized.' });
//     } catch (error) {
//       next(error);
//     }
//   }
// );

//passport.authenticate('google', { failureRedirect: '/users/login' })
