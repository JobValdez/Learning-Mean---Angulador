const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs');


// Validate Function to check e-mail length
let emailLengthChecker = (email) => {
  // Check if e-mail exists
  if (!email) {
    return false; // Return error
  } else {
    // Check the length of e-mail string
    if (email.length < 5 || email.length > 40) {
      return false; // Return error if not within proper length
    } else {
      return true; // Return as valid e-mail
    }
  }
};

let validEmailChecker = (email) => {
  // Check if e-mail exists
  if (!email) {
    return false; // Return error
  } else {
    // Regular expression to test for a valid e-mail
    const regExp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    return regExp.test(email); // Return regular expression test results (true or false)
  }
};

const emailValidators = [
  // First Email Validator
  {
    validator: emailLengthChecker,
    message: 'El correo debe tener minimo 5 caracteres pero no mas de 40'
  },
  // Second Email Validator
  {
    validator: validEmailChecker,
    message: 'Debes ingresar un correo Valido'
  }
];

// Validate Function to check username length
let usernameLengthChecker = (username) => {
  // Check if username exists
  if (!username) {
    return false; // Return error
  } else {
    // Check length of username string
    if (username.length < 3 || username.length > 25) {
      return false; // Return error if does not meet length requirement
    } else {
      return true; // Return as valid username
    }
  }
};

// Validate Function to check if valid username format
let validUsername = (username) => {
  // Check if username exists
  if (!username) {
    return false; // Return error
  } else {
    // Regular expression to test if username format is valid
    const regExp = new RegExp(/^[a-zA-Z0-9]+$/);
    return regExp.test(username); // Return regular expression test result (true or false)
  }
};

// Array of Username validators
const usernameValidators = [
  // First Username validator
  {
    validator: usernameLengthChecker,
    message: 'El usuario debe tener minimo 3 caracteres pero no mas de 30'
  },
  // Second username validator
  {
    validator: validUsername,
    message: 'El Usuario no puede tener caracteres especiales'
  }
];

// Validate Function to check password length
let passwordLengthChecker = (password) => {
  // Check if password exists
  if (!password) {
    return false; // Return error
  } else {
    // Check password length
    if (password.length < 8 || password.length > 35) {
      return false; // Return error if passord length requirement is not met
    } else {
      return true; // Return password as valid
    }
  }
};

// Validate Function to check if valid password format
let validPassword = (password) => {
  // Check if password exists
  if (!password) {
    return false; // Return error
  } else {
    // Regular Expression to test if password is valid format
    const regExp = new RegExp(/^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[\d])(?=.*?[\W]).{8,35}$/);
    return regExp.test(password); // Return regular expression test result (true or false)
  }
};

// Array of Password validators
const passwordValidators = [
  // First password validator
  {
    validator: passwordLengthChecker,
    message: 'La contraseña debe ser minimo 8 caracteres pero no mas de 35'
  },
  // Second password validator
  {
    validator: validPassword,
    message: 'Debe tener por lo menos una letra Mayuscula, Miniscula, Caracter especial , y numeros'
  }
];

const userSchema = new Schema({
    email: { type: String, require: true, unique: true, lowercase: true, validate: emailValidators},
    username: { type: String, require: true, unique: true, lowercase: true, validate: usernameValidators},
    password: { type: String, require: true, validate: passwordValidators}
});

userSchema.pre('save', function (next) {
  if (!this.isModified('password'))
    return next();

  bcrypt.hash(this.password, null, null, (err, hash) => {
    if (err) return next(err);
    this.password = hash;
    next();
  })
});



userSchema.methods.comparePassword = (password) => {
  return bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.model('User', userSchema);