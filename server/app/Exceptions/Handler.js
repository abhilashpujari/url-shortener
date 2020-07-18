const BaseExceptionHandler = use('BaseExceptionHandler')

class ExceptionHandler extends BaseExceptionHandler {
  async handle(error, {response, session}) {
    let errorMessage = error.message;
    if (error.name === 'ValidationException') {
      errorMessage = error.messages[0].message
    }

    response.status(error.status);
    response.json({
      message: errorMessage,
      code: error.status
    });
  }
}

module.exports = ExceptionHandler
