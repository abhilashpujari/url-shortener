const BaseExceptionHandler = use('BaseExceptionHandler')

class ExceptionHandler extends BaseExceptionHandler {
  /**
   *
   * @param error
   * @param response
   * @param session
   * @returns {Promise<void>}
   */
  async handle(error, {response, session}) {
    let message = error.message

    if (error.name === 'ValidationException') {
      message = error.messages[0].message
    }

    response.status(error.status);
    response.json({
      message: message,
      code: error.status
    });
  }
}

module.exports = ExceptionHandler
