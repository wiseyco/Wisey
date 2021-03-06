const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const passport = require('passport');
const path = require('path');

const users = require('./routes/api/users');
const trainingcenter = require('./routes/api/trainingcenter');
const courses = require('./routes/api/courses');
const cloudinary = require('cloudinary');

const app = express();

// Cloudinary config
const cloudinaryApiKey = require('./config/keys').apiKey;
const cloudinaryApiSecret = require('./config/keys').apiSecret;

cloudinary.config({ 
  cloud_name: 'devpolo', 
  api_key: cloudinaryApiKey, 
  api_secret: cloudinaryApiSecret 
});

// Body parser middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// DB config
const db = require('./config/keys').mongoURI;

// Connect to MongoDB
var options = { server: { socketOptions: {connectTimeoutMS: 5000 } }};
mongoose.connect(db, 
    options,         
    function(err) {
     console.log(err);
    }
);
// mongoose
//   .connect(db, { useNewUrlParser: true })
  // .then(() => console.log('MongoDB Connected !'))
  // .catch(err => console.log('err :', err));

// Passport middleware
app.use(passport.initialize());

// Passport Config
require('./config/passport')(passport);

app.use('/api/users', users);
app.use('/api/tc', trainingcenter);
app.use('/api/courses', courses);

// Server static assets if in production
if (process.env.NODE_ENV === 'production') {
 // Set static folder
 app.use(express.static('client/build'));
 app.get('*', (req, res) => {
   res.sendFile(path.resolve(__dirname,'client','build','index.html'));
 });
}

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

const port = process.env.PORT || 5000;

app.listen(port, () => console.log('port :', port));