const HttpException = use('App/Exceptions/HttpException');

class HttpBadRequest extends HttpException {
  /**
   *
   * @param message
   */
  constructor(message) {
    super(message)
    this.name = 'bad_request'
    this.status = 400
  }
}

module.exports = HttpBadRequest
