class HttpException extends Error {
  /**
   *
   * @param message
   */
  constructor(message) {
    super(message)
    this.name = 'exception'
    this.status = 500;
    this.message = message
  }
}

module.exports = HttpException
