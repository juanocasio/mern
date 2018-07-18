const Validator = require('validator');
const isEmpty = require('./is-empty');

//module.exports = function validateRegisterInput(data){

const validateRegisterInput = (data) =>{
  let errors = {};

  
  if (!Validator.isLength(data.name, {min: 2, max: 30})){
    errors.name = 'Name must be between 2 and 30 characters';
  }

  if (!Validator.isEmail((data.email || ''))){
    errors.email = 'Please enter a valid email address';
  }

  if(isEmpty(data.email)){
    errors.email = 'Email field is required';
  }
  
  if(!Validator.isLength(data.password, {min: 6, max:30})){
    errors.password = 'Password length should be between 6 and 30 characters';
  }
  if(isEmpty(data.password)){
    errors.password = 'Password required';
  }

  if(isEmpty(data.confirmPassword)){
    errors.confirmPassword = 'You must confirm password';
  } 

  if ((data.password || '') !== (data.confirmPassword || '')){
    errors.confirmPassword = 'Passwords do not match';
  }



  return {
    errors,
    isValid: isEmpty(errors)
  };
};

const validateLoginInput = (data) =>{

};

module.exports = {
  validateRegisterInput,
  validateLoginInput
}