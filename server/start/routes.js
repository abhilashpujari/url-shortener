'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.post('urls', 'UrlController.create')
  .as('urls.create')
  .middleware(['auth'])
  .validator('CreateUrl')

Route.get(':code', 'UrlController.view')
  .as('urls.view')

Route.post('register', 'UserController.register')
  .as('users.register')
  .validator('Register')

Route.post('authenticate', 'UserController.login')
  .as('users.login')
  .validator('Login')
