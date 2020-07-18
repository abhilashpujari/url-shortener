'use strict'

let { nanoid } = require('nanoid')

class UrlController {
  create({request, response}) {
    const data = request.all()

    let shortCode;
    if (data.short_code) {
      shortCode = data.short_code
    } else {
      shortCode = nanoid(7)
    }

    response.status(201)
    response.json(data)
  }
}

module.exports = UrlController
