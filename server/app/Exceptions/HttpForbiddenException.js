const HttpException = use('App/Exceptions/HttpException');

class HttpForbidden extends HttpException {
  /**
   *
   * @param message
   */
  constructor(message) {
    super(message)
    this.name = 'forbidden'
    this.status = 403
  }
}

module.exports = HttpForbidden
