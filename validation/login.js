const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = validateLoginInput = (data) => {
  errors = {};

  data.email = !isEmpty(data.email) ? data.email : '';
  data.password = !isEmpty(data.password) ? data.password : '';

  if(!Validator.isEmail(data.email)) {
    errors.email = 'L\'adresse e-mail n\'est pas valide';
  }

  if(Validator.isEmpty(data.email)) {
    errors.email = 'Une adresse e-mail est obligatoire.';
  }

  if(Validator.isEmpty(data.password)) {
    errors.password = 'Un mot de passe est obligatoire.';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  }
}