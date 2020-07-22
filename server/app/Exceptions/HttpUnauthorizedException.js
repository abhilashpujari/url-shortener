const HttpException = use('App/Exceptions/HttpException');

class HttpUnauthorizedException extends HttpException {
  /**
   *
   * @param message
   */
  constructor(message) {
    super(message)
    this.name = 'unauthorized'
    this.status = 401
  }
}

module.exports = HttpUnauthorizedException
