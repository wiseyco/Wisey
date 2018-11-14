const express = require('express');
const router = express.Router();
const passport = require('passport');

// Load input validation
const validateTrainingCenterInput = require('../../validation/tc-register');

// Load Profile and User Models
const TrainingCenter = require('../../models/TrainingCenter');


const slugify = text => {
  return text.toString().toLowerCase()
    .replace(/\s+/g, '-')           // Replace spaces with -
    .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
    .replace(/\-\-+/g, '-')         // Replace multiple - with single -
    .replace(/^-+/, '')             // Trim - from start of text
    .replace(/-+$/, '');            // Trim - from end of text
}

// @route   POST api/tc
// @desc    Create or edit training center profile
// @access  Private
router.post('/', passport.authenticate('jwt', { session: false }), (req, res) => {

  // Are inputs valid?
  const { errors, isValid } = validateTrainingCenterInput(req.body);

  if(!isValid) {
    return res.status(400).json(errors);
  }

  let trainingCenterFields = {};

  trainingCenterFields.user = req.user.id

  if(req.body.companyName) trainingCenterFields.companyName = req.body.companyName;

  // handle
  if(req.body.companyName) trainingCenterFields.handle = slugify(req.body.companyName);
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
        TrainingCenter.findOneAndUpdate(
            { user: req.user.id },
            { $set: trainingCenterFields },
            { new: true })
          .then(trainingCenter => res.json(trainingCenter))

      } else {

        // Create
        TrainingCenter.findOne({ handle: trainingCenterFields.handle })
          .then(trainingCenter => {

            // Check if the handle exists
            if(trainingCenter) {

              // Create special handle
              trainingCenterFields.handle = `${trainingCenter.handle}-${Math.floor(Math.random() * Math.floor(9999))}`;
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
    })
});


module.exports = router;
