'use strict'

let {nanoid} = require('nanoid')
const Url = use('App/Models/Url')
const HttpNotFoundException = use('App/Exceptions/HttpNotFoundException');

class UrlController {

  /**
   *
   * @param request
   * @param response
   * @returns {Promise<void>}
   */
  async create({request, response}) {
    let {title = '', short_code: shortCode, original_url} = request.post()

    // if shortCode is not passed by user than generate custom short code
    if (!shortCode) {
      shortCode = nanoid(7)
    }

    const url = new Url()
    url.title = title
    url.short_code = shortCode
    url.original_url = original_url
    await url.save()

    response.status(201)
    response.json(url)
  }

  /**
   *
   * @param request
   * @param response
   * @param params
   * @returns {Promise<*>}
   */
  async view({request, response, params}) {
    let code = params.code
    const url = await Url.findBy('short_code', code)

    if (!url) {
      throw new HttpNotFoundException('short code not found');
    }

    response.redirect(url.original_url, false, 301)

  }
}

module.exports = UrlController
