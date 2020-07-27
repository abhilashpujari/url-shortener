'use strict'

let {nanoid} = require('nanoid')
const Url = use('App/Models/Url')
const HttpNotFoundException = use('App/Exceptions/HttpNotFoundException');

class UrlController {

  /**
   *
   * @param auth
   * @param request
   * @param response
   * @returns {Promise<void>}
   */
  async create({request, response, auth}) {
    let {title = '', short_code: shortCode, original_url} = request.post()
    const user = await auth.getUser()

    // if shortCode is not passed by user than generate custom short code
    if (!shortCode) {
      shortCode = nanoid(7)
    }

    const url = await user
      .urls()
      .create({ title: title, short_code: shortCode, original_url: original_url })

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
