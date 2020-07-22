'use strict'

class CreateUrl {
  get rules () {
    return {
      original_url: 'required',
      short_code: 'unique:urls'
    }
  }

  get messages () {
    return {
      'original_url.required': 'original_url field is required.',
      'short_code.unique': 'short code is already in use'
    }
  }
}

module.exports = CreateUrl
