import { Router } from 'express';

export const homeRoute = Router();

homeRoute.get('/', function (req, res, next) {
  res.send('</h1>This is home route</h1>');
});


