'use strict'

import Base from '../base'
import CustomError from '../custom-error'
import hook from './hook'

export default class Service extends Base {
  constructor(app, models) {
    super('/books', models, hook, {})
  }

  static initialize(app, models) {
    if (!this._service) {
      this._service = new Service(app, models)
    }

    app.use(this._service.createRouter())

    return this._service
  }

  async get(id, query) {
    // Use this to enable get request by Id for 'books' model
    return { id }
  }

  async find(query) {
    // Use this to enable get request all data for 'books' model
    const results = await this.models.books.findAll()
    return results
  }

  async create(data) {
    // Use this to enable post request for 'books' model
    if (Array.isArray(data)) {
      throw new CustomError(405, 'Not allowed bulk insert')
    }

    const results = await this.models.books.create(data)

    return results.dataValues
  }

  async update(id, data, query) {
    // Use this to enable put request for 'books' model
    console.log('id', id)
    console.log('data', data)

    return { id, ...data }
  }

  async delete(id, query) {
    // Use this to enable delete request by Id for 'books' model
    console.log('id', id)
    return { id }
  }
}
