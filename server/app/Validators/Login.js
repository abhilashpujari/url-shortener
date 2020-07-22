'use strict'

class Login {
  get rules () {
    return {
      email: 'required|email',
      password: 'required'
    }
  }

  get messages () {
    return {
      'email.required': 'email field is required.',
      'email.email': 'email field must be valid email address.',
      'password.required': 'password is required'
    }
  }
}

module.exports = Login
