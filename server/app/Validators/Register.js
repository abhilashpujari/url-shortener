'use strict'

class Register {
  get rules () {
    return {
      email: 'required|email|unique:users,email',
      password: 'required'
    }
  }

  get messages () {
    return {
      'email.required': 'email field is required.',
      'email.email': 'email field must be valid email address.',
      'email.unique': 'user already exists',
      'password.required': 'password is required'
    }
  }
}

module.exports = Register
