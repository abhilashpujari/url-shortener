'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserSchema extends Schema {
  up () {
    this.create('users', (table) => {
      table.increments().primary()
      table.string('email', 254).notNullable().unique()
      table.string('first_name', 60).nullable()
      table.string('last_name', 60).nullable()
      table.string('password', 60).notNullable()
      table.boolean('is_verified').defaultTo(true)
      table.timestamps()
    })
  }

  down () {
    this.drop('users')
  }
}

module.exports = UserSchema
