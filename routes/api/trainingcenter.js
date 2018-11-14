const express = require('express');
const router = express.Router();
const passport = require('passport');
const multer = require('multer');

// Multer Setup
const toTCLogosFolder = multer({ dest: 'uploads/img/tc-logos' });
const defaultLogo = '../../uploads/img/tc-logos/default.png';

// Load input validation
const validateTrainingCenterInput = require('../../validation/tc-register');

// Load Profile and User Models
const TrainingCenter = require('../../models/TrainingCenter');

// Format uri
const slugify = text => {
  return text.toString().toLowerCase()
    .replace(/\s+/g, '-')           // Replace spaces with -
    .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
    .replace(/\-\-+/g, '-')         // Replace multiple - with single -
    .replace(/^-+/, '')             // Trim - from start of text
    .replace(/-+$/, '');            // Trim - from end of text
}


// @route   GET api/tc
// @desc    Get training center by uri
// @access  Public
router.get('/:uri', (req, res) => {

  TrainingCenter
    .findOne({ uri: req.params.uri })
    // .populate('user', ['firstName', 'lastName']) // In case we want to get users info
    .then(trainingCenter => {

      if(!trainingCenter) {
        res.status(404).json({ notFound: 'There is no training center for this uri.' })
      }
      res.json(trainingCenter);
    })
    .catch(err => res.status(404).json(err));
});


// @route   POST api/tc
// @desc    Create or edit user profile
// @access  Private
router.post('/', passport.authenticate('jwt', { session: false }), (req, res) => {
  
  // Are inputs valid?
  const { errors, isValid } = validateTrainingCenterInput(req.body);

  if(!isValid) {
    return res.status(400).json(errors);
  }

  let trainingCenterFields = {};

  trainingCenterFields.user = req.user.id

  // uri
  if(req.body.companyName) trainingCenterFields.uri = slugify(req.body.companyName);  
  if(req.body.companyName) trainingCenterFields.companyName = req.body.companyName;
  trainingCenterFields.logo = defaultLogo;
  if(req.body.desc) trainingCenterFields.desc = req.body.desc;
  if(req.body.certification) trainingCenterFields.certification = req.body.certification;
  if(req.body.expertise) trainingCenterFields.expertise = req.body.expertise;
  if(req.body.numberOfTrainers) trainingCenterFields.numberOfTrainers = req.body.numberOfTrainers;
  if(req.body.lastYearTrainedPeople) trainingCenterFields.lastYearTrainedPeople = req.body.lastYearTrainedPeople;

  // Social
  trainingCenterFields.social = {};
  if(req.body.website) trainingCenterFields.social.website = req.body.website;
  if(req.body.linkedin) trainingCenterFields.social.linkedin = req.body.linkedin;
  if(req.body.twitter) trainingCenterFields.social.twitter = req.social.twitter;
  if(req.body.youtube) trainingCenterFields.social.youtube = req.body.youtube;

  // pictures

  // Missed one
  // if(req.body.dateOfEstablishment) trainingCenterFields.dateOfEstablishment = req.body.dateOfEstablishment;
  // if(req.body.logo) trainingCenterFields.logo = req.body.logo;
  // if(req.body.mainCustomers) trainingCenterFields.mainCustomers = req.body.mainCustomers;
  // if(req.body.satisfactionRating) trainingCenterFields.satisfactionRating = req.body.satisfactionRating;

  TrainingCenter
    .findOne({ user: req.user.id })
    .then(trainingCenter => {

      if(trainingCenter) {

        // Update
        TrainingCenter
          .findOneAndUpdate(
            { user: req.user.id },
            { $set: trainingCenterFields },
            { new: true })
          .then(trainingCenter => res.json(trainingCenter))

      } else {

        // Create
        TrainingCenter.findOne({ uri: trainingCenterFields.uri })
          .then(trainingCenter => {

            // Check if the uri exists
            if(trainingCenter) {

              // Create special uri
              trainingCenterFields.uri = `${trainingCenter.uri}-${Math.floor(Math.random() * Math.floor(9999))}`;
              new TrainingCenter(trainingCenterFields)
                .save()
                .then(trainingCenter => res.json(trainingCenter));

            } else {
              new TrainingCenter(trainingCenterFields)
                .save()
                .then(trainingCenter => res.json(trainingCenter));
            }
          });
      }
    });
});


// @route   POST api/tc/add-logo
// @desc    Add or edit the training center logo
// @access  Private
router.post('/add-logo', toTCLogosFolder.single('logo'), passport.authenticate('jwt', { session: false }), (req, res) => {

  let errors = {};

  TrainingCenter
    .findOne({ user: req.user.id })
    .then(trainingCenter => {

      if(trainingCenter) {
        TrainingCenter
          .findOneAndUpdate(
            { user: req.user.id },
            { logo: req.file.path },
            { new: true })
          .then(trainingCenter => {
            res.json(trainingCenter)
          })

      } else {
        errors.logo = `Vous n'êtes pas référencé comment centre de formation.`;
        res.status(404).json(errors);
      }
    });
});


// @route   DELETE api/tc
// @desc    Delete trainingcenter
// @access  Private
router.delete('/', passport.authenticate('jwt', { session: false }), (req, res) => {

  TrainingCenter
    .findOneAndRemove({ user: req.user.id })
    .then(() => res.json({ success: true }))
});

module.exports = router;