import express from 'express';
import createError from 'http-errors';
import passport from 'passport';
import session from 'express-session';
import cors from 'cors';
import { initializeDbConnection } from './config/initializeDbConnection.js';
import routes from './routes/index.js';
import { config } from 'dotenv';
import Coffee from './models/coffeeProductModel.js';
const app = express();

config();



app.use(function (req, res, next) {
  //  res.header("Access-Control-Allow-Origin", "*");
  const allowedOrigins = [
    'http://localhost:3000',
    'https://bohemiankidscafe.onrender.com',
    'http://bohemiankidscafe.onrender.com',
  ];
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  }
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  res.header('Access-Control-Allow-credentials', true);
  res.header(
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, PATCH, DELETE, UPDATE'
  );
  next();
});

// MIDDLEWARE
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use(
//   cors({
//     origin: 'http://localhost:3000', // where react app is working
//   })
// );

// SET UP SESSION. CODE SHOULD BE IN THIS ORDER
// app.use(
//   session({
//     secret: process.env.SECRET,
//     resave: false,
//     saveUninitialized: false,
//   })
// );
// INITIALIZE PASSPORT
// app.use(passport.initialize());
// app.use(passport.session());

// import('./config/passportConfig.js');

// ROUTES
// Imports all of the routes from ./routes/index.js
app.use(routes);

/** ERROR HANDLERS */
//404
app.use((req, res, next) => {
  next(createError(404, 'Error 404: Route is not defined..🤨'));
});

//MAIN ERROR HANDLER
app.use((error, req, res, next) => {
  if (error) {
    res.status(error.status || 500).send({
      error: {
        name: error.name,
        code: error.code,
        status: error.status || 500,
        message: error.message,
        stack: error.stack,
      },
    });
  }
  next();
});

// DATABASE CONNECTION AND START SERVER
const PORT = process.env.PORT || 5001;
initializeDbConnection().then(() => {
  app.listen(PORT, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log(`Server is listening on port http://localhost:${PORT}`);
    }
  });
});
