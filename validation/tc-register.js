const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = validateTrainingCenterInput = (data) => {
  let errors = {};

  data.companyName = !isEmpty(data.companyName) ? data.companyName : '';

  if(!Validator.isLength(data.companyName, { min: 2, max: 40 })) {
    errors.companyName = 'Le nom doit comprendre 2 caractères minimum et 40 carachères maximum.';
  }

  if(Validator.isEmpty(data.companyName)) {
    errors.companyName = 'Un nom est obligatoire.';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  }
}

