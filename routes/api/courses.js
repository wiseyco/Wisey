const express = require('express');
const router = express.Router();
const passport = require('passport');

// Load input validation
const validateCourseInput = require('../../validation/course');

// Load Course Model
const Course = require('../../models/Course');

// Load Profile Model
const TrainingCenter = require('../../models/TrainingCenter');

// @route   POST api/courses/create
// @desc    Create course
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
        if (req.body.delivery) courseFields.delivery = req.body.delivery;
        if (req.body.price) courseFields.price = req.body.price;
        // targetedAudience - Split into array
        if (typeof req.body.targetedAudience !== 'undefined') {
          courseFields.targetedAudience = req.body.targetedAudience.split(',');
        }
        if (req.body.CPF) courseFields.CPF = req.body.CPF;
        if (req.body.duration) courseFields.duration = req.body.duration;
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
// @desc    Update course
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
        if (req.body.delivery) courseFields.delivery = req.body.delivery;
        if (req.body.price) courseFields.price = req.body.price;
        // targetedAudience - Split into array
        if (typeof req.body.targetedAudience !== 'undefined') {
          courseFields.targetedAudience = req.body.targetedAudience.split(',');
        }
        if (req.body.CPF) courseFields.CPF = req.body.CPF;
        if (req.body.duration) courseFields.duration = req.body.duration;
        if (req.body.targetedLevel) courseFields.targetedLevel = req.body.targetedLevel;
        if (req.body.requirements) courseFields.requirements = req.body.requirements;
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


module.exports = router;
