'use strict'

const User = use('App/Models/User')
const HttpBadRequestException = use('App/Exceptions/HttpBadRequestException');
const HttpException = use('App/Exceptions/HttpException');

/** @type {import('@adonisjs/framework/src/Hash')} */
const Hash = use('Hash')

class UserController {

  /**
   *
   * @param request
   * @param response
   * @returns {Promise<void>}
   */
  async register({request, response}) {
    let {email, password} = request.post()

    const user = new User()
    user.email = email
    user.password = password
    await user.save()

    response.status(201)
    response.json('User registered successfully')
  }

  /**
   *
   * @param request
   * @param response
   * @param auth
   * @returns {Promise<void>}
   */
  async login({request, response, auth}) {
    let {email, password} = request.post()

    let user = User.findBy('email', email)

    try {
      if (await auth.attempt(email, password)) {
        let token = await auth.generate(user)
        response.status(201)
        response.json(token)
      }


    } catch (error) {
      if (error.message.includes('E_PASSWORD_MISMATCH') || error.message.includes('E_USER_NOT_FOUND')) {
        throw new HttpBadRequestException('You have entered an invalid email or password.');
      }

      throw new HttpBadRequestException(error.message);
    }
  }
}

module.exports = UserController
