const HttpException = use('App/Exceptions/HttpException');

class HttpNotFoundException extends HttpException {
  /**
   *
   * @param message
   */
  constructor(message) {
    super(message)
    this.name = 'not_found'
    this.status = 404
  }
}

module.exports = HttpNotFoundException
