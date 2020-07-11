'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UrlsSchema extends Schema {
  up () {
    this.create('urls', (table) => {
      table.increments()
      table.string('originalUrl').notNullable()
      table.string('shortCode').notNullable().unique()
      table.timestamps()
    })
  }

  down () {
    this.drop('urls')
  }
}

module.exports = UrlsSchema
