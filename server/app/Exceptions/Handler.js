const BaseExceptionHandler = use('BaseExceptionHandler')

class ExceptionHandler extends BaseExceptionHandler {
  async handle (error, { response, session }) {
    response.status(error.status);
    response.json({
      message: error.message,
      code: error.status
    });
  }
}

module.exports = ExceptionHandler
