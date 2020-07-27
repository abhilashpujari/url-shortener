'use strict'

class CreateUrl {
  get rules () {
    return {
      original_url: 'required|url',
      short_code: 'unique:urls,short_code'
    }
  }

  get messages () {
    return {
      'original_url.required': 'original_url field is required.',
      'original_url.url': 'original_url field must be valid url eg (https://test.com).',
      'short_code.unique': 'short code is already in use'
    }
  }
}

module.exports = CreateUrl
