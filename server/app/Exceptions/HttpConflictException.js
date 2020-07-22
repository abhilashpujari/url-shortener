const HttpException = use('App/Exceptions/HttpException');

class HttpConflictException extends HttpException {
  /**
   *
   * @param message
   */
  constructor(message) {
    super(message)
    this.name = 'conflict'
    this.status = 409
  }
}

module.exports = HttpConflictException
