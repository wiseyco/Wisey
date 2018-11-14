const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const passport = require('passport');

const users = require('./routes/api/users');
const trainingcenter = require('./routes/api/trainingcenter');
const courses = require('./routes/api/courses');

const app = express();

// // Body parser middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// DB config
const db = require('./config/key').mongoURI;

// Connect to MongoDB
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log('MongoDB Connected !'))
  .catch(err => console.log('err :', err));

// Passport middleware
app.use(passport.initialize());

// Passport Config
require('./config/passport')(passport);

app.use('/api/users', users);
app.use('/api/tc', trainingcenter);
app.use('/api/courses', courses);

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

const port = process.env.PORT || 5000;

app.listen(port, () => console.log('port :', port));