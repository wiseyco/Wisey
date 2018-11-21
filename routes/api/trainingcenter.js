const express = require('express');
const router = express.Router();
const passport = require('passport');
const multer = require('multer');
const path = require('path');
const cloudinary = require('cloudinary');


// // Set storage Engine 
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     if(file.fieldname === 'logo') {
//       cb(null, '../../uploads/img/tc-logos');
//     } else {
//       cb(null, '../../uploads/img/tc-pictures');
//     }
//   },
//   filename: (req, file, cb) => {
//     cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
//   }
// });

// Set storage Engine 
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/img/')
  }
  ,
  filename: (req, file, cb) => {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
  }
});

const upload = multer({storage});
const uploads = multer({storage}).array('pictures', 6);
let PhotoPath = `https://res.cloudinary.com/devpolo/image/upload/v1542813733/default.png`;
const getImageInfos = multer()


// Load input validation
const validateTrainingCenterInput = require('../../validation/tc-register');

// Load Slugify
const slugify = require('../../utils/slugify');

// Load Profile and User Models
const TrainingCenter = require('../../models/TrainingCenter');


// @route   POST api/tc/test
// @desc    TEST upload cloudinary
// @access  Private
router.post('/test', upload.single('logo'), passport.authenticate('jwt', { session: false }), (req, res) => {

  // Save picture into path variable
  const path = req.file.path

  cloudinary.v2.uploader.upload(path, 
    (error, result) => {
      console.log(result, error)
      res.json({sucess: true})
    });
});

// @route   GET api/tc/all
// @desc    Get all training centers
// @access  Public
router.get('/all', (req, res) => {
  const errors = {};

  TrainingCenter
    .find({})
    // .populate('user', ['firstName', 'lastName']) // In case we want to get users info
    .then(trainingCenters => {

      if(!trainingCenters) {
        errors.notFound = `Il n'y a aucun centre de formation`;
        res.status(404).json(errors);
      }

      res.json(trainingCenters);
    })
    .catch(err => {
      console.log('err :', err);
      errors.notFound = `Il n'y a aucun centre de formation`;
      res.status(404).json(errors);
    });
});

// @route   GET api/tc
// @desc    Get current user training center
// @access  Private
router.get('/', passport.authenticate('jwt', { session: false }), (req, res, next) => {
  const errors = {};

  TrainingCenter.findOne({ user: req.user.id })
    // .populate('user', ['name', 'avatar'])
    .then(trainingCenter => {

      if(!trainingCenter) {
        errors.notrainingcenter = 'There is no profile for this user!';
        return res.status(404).json(errors);
      }

      res.json(trainingCenter);
    })
    .catch(err => res.status(404).json(err))
});


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
// @desc    Create or edit training center
// @access  Private
router.post('/', upload.single('logo'), passport.authenticate('jwt', { session: false }), (req, res) => {
  // Are inputs valid?
  const { errors, isValid } = validateTrainingCenterInput(req.body);

  if(!isValid) {
    return res.status(400).json(errors);
  }
  console.log('req.body :', req.body);
  
  console.log('object 3:', req.file);

  // Save logo into path variable
  let imgUri;
  
  if(req.file !== undefined) {
    PhotoPath = req.file.path;
    errors.logo = "Problème lors de l'upload du logo";
  }

  // Save into cloudinary
  cloudinary.v2.uploader.upload(PhotoPath, (error, result) => {
    imgUri = result.url; 

    const trainingCenterFields = {};

    trainingCenterFields.user = req.user.id

    // uri
    // if(req.body.companyName) trainingCenterFields.uri = slugify(req.body.companyName); // Moved below 
    if(req.body.companyName) trainingCenterFields.companyName = req.body.companyName;
    if(imgUri) trainingCenterFields.logo = imgUri;
    if(req.body.desc) trainingCenterFields.desc = req.body.desc;
    if(req.body.certification) trainingCenterFields.certification = req.body.certification;
    if(req.body.expertise) trainingCenterFields.expertise = req.body.expertise;
    if(req.body.numberOfTrainers) trainingCenterFields.numberOfTrainers = req.body.numberOfTrainers;
    if(req.body.lastYearTrainedPeople) trainingCenterFields.lastYearTrainedPeople = req.body.lastYearTrainedPeople;
    if(req.body.mainCustomers) trainingCenterFields.mainCustomers = req.body.mainCustomers;

    // Social
    trainingCenterFields.social = {};
    if(req.body.website) trainingCenterFields.social.website = req.body.website;
    if(req.body.linkedin) trainingCenterFields.social.linkedin = req.body.linkedin;
    if(req.body.twitter) trainingCenterFields.social.twitter = req.body.twitter;
    if(req.body.youtube) trainingCenterFields.social.youtube = req.body.youtube;


    // Missed one
    // if(req.body.dateOfEstablishment) trainingCenterFields.dateOfEstablishment = req.body.dateOfEstablishment;
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
          TrainingCenter
            .findOne({ uri: slugify(req.body.companyName) })
            .then(trainingCenter => {

              // Check if the uri exists
              if(trainingCenter) {

                // Create special uri
                trainingCenterFields.uri = `${trainingCenter.uri}-${Math.floor(Math.random() * Math.floor(9999))}`;
                new TrainingCenter(trainingCenterFields)
                  .save()
                  .then(trainingCenter => res.json(trainingCenter));

              } else {
                trainingCenterFields.uri = slugify(req.body.companyName);
                new TrainingCenter(trainingCenterFields)
                  .save()
                  .then(trainingCenter => res.json(trainingCenter));
              }
            });
        }
      });
  
  });
});


  // @route   POST api/tc/add-logo
  // @desc    Add or edit the training center logo
  // @access  Private
  router.post('/add-logo', passport.authenticate('jwt', { session: false }), (req, res) => {
    const errors = {};

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
          errors.notFound = `Vous n'êtes pas référencé comment centre de formation.`;
          res.status(404).json(errors);
        }
      });
  });


// @route   POST api/tc/pictures
// @desc    Add pictures to a training center
// @access  Private
router.post('/pictures', uploads, passport.authenticate('jwt', { session: false }), (req, res) => {
  const errors = {};
 
  let filesCopy = [...req.files];
  let newPictures = [];
  
  for(let i = 0; i < filesCopy.length; i++) {
    newPictures.push({imgUri: filesCopy[i].path, pictureTitle: filesCopy[i].filename, pictureDesc: filesCopy[i].path});
  }

  TrainingCenter
    .findOneAndUpdate(
      { user: req.user.id },
      { $push:{ pictures: newPictures }},
      { new: true })
    .then(trainingCenter => res.json(trainingCenter))
    .catch(err => console.log('err :', err));
});


// @route   DELETE api/tc/pictures/:id/:picture_id
// @desc    Delete a picture
// @access  Private
router.delete('/pictures/:id/:picture_id', passport.authenticate('jwt', { session: false }), (req, res) => {
  const errors = {};

  TrainingCenter
    .findById(req.params.id)
    .then(trainingCenter => {

      // Check if the picture exists
      if(trainingCenter.pictures.filter(picture => picture._id.toString() === req.params.picture_id).length === 0) {
        errors.notFound = 'La photo n\'existe pas';
        return res.status(404).json(errors);
      }

      // Get remove index
      const removeIndex = trainingCenter.pictures
      .map(item => item._id.toString())
      .indexOf(req.params.picture_id);

      // Splice picture out of array
      trainingCenter.pictures.splice(removeIndex, 1);

      // Save
      trainingCenter
        .save()
        .then(trainingCenter => res.json(trainingCenter));
    })
    .catch(err => {
      errors.notFound = 'Aucun centre de formation trouvé';
      res.status(404).json(errors);
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