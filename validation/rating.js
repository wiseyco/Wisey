const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateRatingInput(data) {
  let errors = {};

  data.name = !isEmpty(data.name) ? data.name : '';
  data.comment = !isEmpty(data.comment) ? data.comment : '';

  if (!Validator.isLength(data.name, { min: 3, max: 100 })) {
    errors.name = 'Name must be between 3 and 100 characters';
  }

  if (Validator.isEmpty(data.name)) {
    errors.name = 'Name field is required';
  }

  if (!Validator.isLength(data.comment, { min: 5, max: 400 })) {
    errors.comment = 'Comment must be between 5 and 400 characters';
  }

  if (Validator.isEmpty(data.comment)) {
    errors.comment = 'Comment field is required';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
