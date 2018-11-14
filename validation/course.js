const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateCourseInput(data) {
  let errors = {};

  data.title = !isEmpty(data.title) ? data.title : '';
  data.price = !isEmpty(data.price) ? data.price : '';

  if (!Validator.isLength(data.title, { min: 5, max: 100 })) {
    errors.title = 'Title must be between 5 and 100 characters';
  }

  if (Validator.isEmpty(data.title)) {
    errors.title = 'Title field is required';
  }

  if (!Validator.isCurrency(data.price.toString())) {
    errors.price = 'Price must be a valid currency amount';
  }

  if (Validator.isEmpty(data.price)) {
    errors.price = 'Price field is required';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
