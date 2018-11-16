const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = validateUserUpdateInput = (data) => {

  let errors = {};

  data.firstName = !isEmpty(data.firstName) ? data.firstName : '';
  data.lastName = !isEmpty(data.lastName) ? data.lastName : '';
  data.email = !isEmpty(data.email) ? data.email : '';

  if(Validator.isEmpty(data.firstName)) {
    errors.firstName = 'Merci de renseigner votre prénom.';
  }

  if(Validator.isEmpty(data.lastName)) {
    errors.lastName = 'Merci de renseigner votre nom.';
  }

  if(!Validator.isEmail(data.email)) {
    errors.email = 'L\'adresse e-mail n\'est pas valide';
  }

  if(Validator.isEmpty(data.email)) {
    errors.email = 'Une adresse e-mail est obligatoire.';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  }
}

