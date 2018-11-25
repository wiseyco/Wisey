const express = require('express');
const router = express.Router();
const passport = require('passport');
// Load input validation
const validateCourseInput = require('../../validation/course');
const validateRatingInput = require('../../validation/rating');
// Load Slugify
const slugify = require('../../utils/slugify');
// Load Course Model
const Course = require('../../models/Course');
// Load Profile Model
const TrainingCenter = require('../../models/TrainingCenter');
// @route   POST api/courses/create
// @desc    Create course as a training center
// @access  Private
router.post(
  '/create',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const { errors, isValid } = validateCourseInput(req.body);
    // Check Validation
    if (!isValid) {
      // If any errors, send 400 with errors object
      return res.status(400).json(errors);
    }
    //Get TrainingCenter ID
    TrainingCenter.findOne({ user: req.user.id })
      .then(trainingCenter => {
        // Get all course fields
        const courseFields = {};
        courseFields.trainingcenter = trainingCenter.id;
        if (req.body.title) courseFields.title = req.body.title;
        if (req.body.handle) courseFields.handle = req.body.handle;
        if (req.body.punchline) courseFields.punchline = req.body.punchline;
        if (req.body.desc) courseFields.desc = req.body.desc;
        if (req.body.delivery) courseFields.delivery = req.body.delivery;
        if (req.body.price) courseFields.price = req.body.price;
        // targetedAudience - Split into array
        if (typeof req.body.targetedAudience !== 'undefined') {
          courseFields.targetedAudience = req.body.targetedAudience.split(',');
        }
        if (req.body.cpf) courseFields.cpf = req.body.cpf;
        // Duration
        courseFields.duration = {time:"", unit:""}
        if (req.body.time) courseFields.duration.time = req.body.time;
        if (req.body.unit) courseFields.duration.unit = req.body.unit;
        if (req.body.targetedLevel) courseFields.targetedLevel = req.body.targetedLevel;
        if (req.body.requirements) courseFields.requirements = req.body.requirements;
        if (req.body.ref) courseFields.ref = req.body.ref;
        // domain (categories) - Split into array
        if (typeof req.body.categories !== 'undefined') {
          courseFields.categories = req.body.categories.split(',');
        }
        // Syllabus
        courseFields.syllabus = [];
        // First Syllabus Section
        const section1 = {title:"", desc:""};
        if (req.body.title1) section1.title = req.body.title1;
        if (req.body.desc1) section1.desc = req.body.desc1;
        courseFields.syllabus.push(section1);
        // Second Syllabus Section
        const section2 = {title:"", desc:""};
        if (req.body.title2) section2.title = req.body.title2;
        if (req.body.desc2) section2.desc = req.body.desc2;
        courseFields.syllabus.push(section2);
        // Third Syllabus Section
        const section3 = {title:"", desc:""};
        if (req.body.title3) section3.title = req.body.title3;
        if (req.body.desc3) section3.desc = req.body.desc3;
        courseFields.syllabus.push(section3);
        // Next Sessions
        courseFields.nextSessions = [];
        const session1 = {from:"", to:"", location: ""};
        if (req.body.from1) session1.from = req.body.from1;
        if (req.body.to1) session1.to = req.body.to1;
        if (req.body.location1) session1.location = req.body.location1;
        courseFields.nextSessions.push(session1);
        //Check if course ref already exists for the training center
        Course.findOne({ trainingcenter: courseFields.trainingcenter, ref: req.body.ref })
          .then(course => {
            if (course) {
              // Course ref already in use --> error
              errors.ref = 'There is already a course with that ref';
              res.status(400).json(errors);
            } else {
              // Check if handle exists
              Course.findOne({ handle: courseFields.handle }).then(course => {
                // Handle already in use --> error
                if (course) {
                  errors.handle = 'That handle already exists';
                  res.status(400).json(errors);
                }
                else {
                  // Save Course if the handle is free
                  new Course(courseFields).save().then(course => res.json(course));
                }
              });
            }
        });
      });
});
// @route   POST api/courses/update
// @desc    Update course as a training center
// @access  Private
router.post(
  '/update',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const { errors, isValid } = validateCourseInput(req.body);
    // Check Validation
    if (!isValid) {
      // If any errors, send 400 with errors object
      return res.status(400).json(errors);
    }
    //Get TrainingCenter ID
    TrainingCenter.findOne({ user: req.user.id })
      .then(trainingCenter => {
        // Get all course fields
        const courseFields = {};
        courseFields.trainingcenter = trainingCenter.id;
        if (req.body.title) courseFields.title = req.body.title;
        if (req.body.handle) courseFields.handle = req.body.handle;
        if (req.body.punchline) courseFields.punchline = req.body.punchline;
        if (req.body.desc) courseFields.desc = req.body.desc;
        if (req.body.delivery) courseFields.delivery = req.body.delivery;
        if (req.body.price) courseFields.price = req.body.price;
        // targetedAudience - Split into array
        if (typeof req.body.targetedAudience !== 'undefined') {
          courseFields.targetedAudience = req.body.targetedAudience.split(',');
        }
        if (req.body.cpf) courseFields.cpf = req.body.cpf;
        // Duration
        courseFields.duration = {time:"", unit:""}
        if (req.body.time) courseFields.duration.time = req.body.time;
        if (req.body.unit) courseFields.duration.unit = req.body.unit;
        if (req.body.targetedLevel) courseFields.targetedLevel = req.body.targetedLevel;
        if (req.body.requirements) courseFields.requirements = req.body.requirements;
        if (req.body.ref) courseFields.ref = req.body.ref;
        // domain - Split into array
        if (typeof req.body.domain !== 'undefined') {
          courseFields.domain = req.body.domain.split(',');
        }
        // Syllabus
        courseFields.syllabus = [];
        // First Syllabus Section
        const section1 = {title:"", desc:""};
        if (req.body.title1) section1.title = req.body.title1;
        if (req.body.desc1) section1.desc = req.body.desc1;
        courseFields.syllabus.push(section1);
        // Second Syllabus Section
        const section2 = {title:"", desc:""};
        if (req.body.title2) section2.title = req.body.title2;
        if (req.body.desc2) section2.desc = req.body.desc2;
        courseFields.syllabus.push(section2);
        // Third Syllabus Section
        const section3 = {title:"", desc:""};
        if (req.body.title3) section3.title = req.body.title3;
        if (req.body.desc3) section3.desc = req.body.desc3;
        courseFields.syllabus.push(section3);
        // Next Sessions
        courseFields.nextSessions = [];
        const session1 = {from:"", to:"", location: ""};
        if (req.body.from1) session1.from = req.body.from1;
        if (req.body.to1) session1.to = req.body.to1;
        if (req.body.location1) session1.location = req.body.location1;
        courseFields.nextSessions.push(session1);
        //Update course with same training center & ref
        Course.findOneAndUpdate(
          { trainingcenter: courseFields.trainingcenter, ref: req.body.ref },
          { $set: courseFields },
          { new: true })
          .then(course => res.json(course));
      });
  });
  // @route   DELETE api/courses/delete/:id
  // @desc    Delete course as a training center
  // @access  Private
  router.delete(
    '/delete/:id',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
      //Get TrainingCenter ID
      TrainingCenter.findOne({ user: req.user.id })
        .then(trainingCenter => {
          Course.findById(req.params.id)
            .then(course => {
              // Check for training center
              if (course.trainingcenter.toString() !== trainingCenter.id) {
                return res
                  .status(401)
                  .json({ notauthorized: 'User not authorized' });
              }
            // Delete
            course.remove().then(() => res.json({ success: true }));
            })
            .catch(err => res.status(404).json({ coursenotfound: 'No course found' }));
        })
        .catch(err => res.status(404).json({ trainingcenternotfound: 'No training center found' }));
  });
  // @route   GET api/courses
  // @desc    Get courses
  // @access  Public
  router.get('/', (req, res) => {
    Course.find()
      .sort({ date: -1 })
      .then(course => res.json(course))
      .catch(err => res.status(404).json({ nocoursefound: 'No courses found' }));
  });
  // @route   GET api/courses/get/:id
  // @desc    Get course by id
  // @access  Public
  router.get('/get/:id', (req, res) => {
    Course.findById(req.params.id)
      .then(course => res.json(course))
      .catch(err =>
        res.status(404).json({ nocoursefound: 'No course found with that ID' })
      );
  });

  // @route   POST api/courses/like/:id
  // @desc    Like a course as a user
  // @access  Private
  router.post(
    '/like/:id',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
      TrainingCenter.findOne({ user: req.user.id }).then(trainingcenter => {
        Course.findById(req.params.id)
          .then(course => {
            if (
              course.likes.filter(like => like.user.toString() === req.user.id)
                .length > 0
            ) {
              return res
                .status(400)
                .json({ alreadyliked: 'User already liked this course' });
            }
            // Add user id to likes array
            course.likes.unshift({ user: req.user.id });
            course.save().then(course => res.json(course));
          })
          .catch(err => {
            console.log('err :', err);
            res.status(404).json({ coursenotfound: 'No course found' })
          });
      });
    }
  );

  // @route   POST api/courses/unlike/:id
  // @desc    Unlike a course as a user
  // @access  Private
  router.post(
    '/unlike/:id',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
      TrainingCenter.findOne({ user: req.user.id }).then(trainingcenter => {
        Course.findById(req.params.id)
          .then(course => {
            if (
              course.likes.filter(like => like.user.toString() === req.user.id)
                .length === 0
            ) {
              return res
                .status(400)
                .json({ notliked: 'You have not yet liked this course' });
            }
            // Get remove index
            const removeIndex = course.likes
              .map(item => item.user.toString())
              .indexOf(req.user.id);
            // Splice out of array
            course.likes.splice(removeIndex, 1);
            // Save
            course.save().then(course => res.json(course));
          })
          .catch(err => res.status(404).json({ coursenotfound: 'No course found' }));
      });
    }
  );
  // @route   GET api/courses/dashboard
  // @desc    Get all the courses registered by the training center
  // @access  Private (training center)
  router.get(
    '/dashboard',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
      //Get TrainingCenter ID
      TrainingCenter.findOne({ user: req.user.id })
        .then(trainingCenter => {
          Course.find({trainingcenter: trainingCenter.id})
            .sort({ date: -1 })
            .then(course => res.json(course))
            .catch(err => res.status(404).json({ nocoursefound: 'No courses found' }));
        });
      }
    );
  // @route   POST api/courses/wishlist
  // @desc    Get all the courses liked by the user
  // @access  Private (user)
  router.get(
    '/wishlist',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    //Get list of courses with the user's id in their like table
        Course.find({ likes: { $elemMatch: { user: req.user.id } }})
          .sort({ date: -1 })
          .then(course => res.json(course))
          .catch(err => res.status(404).json({ nocoursefound: 'No courses found' }));
  });
  // @route   POST api/courses/rating/:id
  // @desc    Add a rating to a course as a user
  // @access  Private
  router.post(
    '/rating/:id',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
      const { errors, isValid } = validateRatingInput(req.body);
      // Check Validation
      if (!isValid) {
        // If any errors, send 400 with errors object
        return res.status(400).json(errors);
      }
      Course.findById(req.params.id)
        .then(course => {
          // Check if the user has already rated this course
          if (
            course.ratings.filter(rating => rating.user.toString() === req.user.id)
              .length > 0
          ) {
            return res
              .status(400)
              .json({ alreadyliked: 'User already rated this course' });
          }
          const newRating = {
            stars: req.body.stars,
            name: req.body.name,
            comment: req.body.comment,
            user: req.user.id
          };
          // Add to ratings array
          course.ratings.unshift(newRating);
          // Save
          course.save().then(course => res.json(course));
        })
        .catch(err => res.status(404).json({ coursenotfound: 'No course found' }));
    }
  );
  // @route   DELETE api/courses/rating/:course_id/:rating_id
  // @desc    Remove a rating from a course as a user
  // @access  Private
  router.delete(
    '/rating/:course_id/:rating_id',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
      Course.findById(req.params.course_id)
        .then(course => {
          // Check to see if rating exists
          if (
            course.ratings.filter(
              rating => rating._id.toString() === req.params.rating_id
            ).length === 0
          ) {
            return res
              .status(404)
              .json({ ratingnotexists: 'Rating does not exist' });
          }
          // Get remove index
          const removeIndex = course.ratings
            .map(rating => rating._id.toString())
            .indexOf(req.params.rating_id);
          // Splice comment out of array
          course.ratings.splice(removeIndex, 1);
          course.save().then(course => res.json(course));
        })
        .catch(err => res.status(404).json({ coursenotfound: 'No course found' }));
    }
  );

 // @route   GET api/courses/latest
  // @desc    Get latest courses
  // @access  Public
  router.get('/latest', (req, res) => {
    Course.find()
      .sort({ date: -1 })
      .limit(4)
      .then(course => res.json(course))
      .catch(err => res.status(404).json({ nocoursefound: 'No courses found' }));
  });

module.exports = router;
