'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UrlsSchema extends Schema {
  up() {
    this.create('urls', (table) => {
      table.increments().primary()
      table.string('title').nullable()
      table.string('original_url').notNullable()
      table.string('short_code').notNullable().unique()
      table.timestamps()

      table.integer('user_id').unsigned()
      table.foreign('user_id').references('id').inTable('users').onDelete('CASCADE')
    })
  }

  down() {
    this.drop('urls')
  }
}

module.exports = UrlsSchema
