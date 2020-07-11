'use strict'

let { nanoid } = require('nanoid');

class UrlController {
  create({request, response}) {
    const data = request.post()

    if (!data.originalUrl) {
      throw new Error('Original Url field is required', 400);
    }

    let shortCode;
    if (data.shortCode) {
      shortCode = data.shortCode;
    } else {
      shortCode = nanoid(7);
    }

    response.status(201);
    response.json(data);
  }
}

module.exports = UrlController
