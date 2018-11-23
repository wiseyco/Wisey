const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = validateTrainingCenterInput = (data) => {
  let errors = {};

  data.companyName = !isEmpty(data.companyName) ? data.companyName : '';
  // data.numberOfTrainers = !isEmpty(data.numberOfTrainers) ? data.numberOfTrainers : '';
  // data.lastYearTrainedPeople = !isEmpty(data.lastYearTrainedPeople) ? data.lastYearTrainedPeople : '';

  if(!Validator.isLength(data.companyName, { min: 2, max: 40 })) {
    errors.companyName = 'Le nom doit comprendre 2 caractères minimum et 40 carachères maximum.';
  }

  if(Validator.isEmpty(data.companyName)) {
    errors.companyName = 'Un nom est obligatoire.';
  }

  // if(!Validator.isInt(data.numberOfTrainers)) {
  //   console.log('lol :');
  //   errors.numberOfTrainers = 'Merci de rentrer un chiffre';
  // }

  // if(!Validator.isNumeric(data.lastYearTrainedPeople)) {
  //   console.log('lol :');
  //   errors.lastYearTrainedPeople = 'Merci de rentrer un chiffre';
  // }

  return {
    errors,
    isValid: isEmpty(errors)
  }
}

